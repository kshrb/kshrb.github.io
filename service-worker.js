/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');
var app_url = 'http://54.69.99.238:8089';
//var app_url = 'http://localhost:8100';

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('ionic-cache').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});


self.addEventListener('notificationclose', function (e) {
  var notification = e.notification;
  console.log(notification);
  /* var primaryKey = notification.data.primaryKey;
  console.log('Closed notification: ' + primaryKey); */
});


self.addEventListener('notificationclick', function (e) {
  var notification = e.notification;
  console.log("===========")
  console.log(notification);
  var action = e.action;
  if (action === 'close') {
    notification.close();
  } else {
    //=== On notification click we can call an api or navigate to window
    /* const pushInfoPromise = fetch(app_url+'?loadSize=1')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
    }); */
    clients.openWindow(app_url);
    notification.close();
  }
});

self.addEventListener('push', ev => {
  const data = ev.data.json();
  console.log('Got push', data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: app_url + '/assets/imgs/logo1.png'
  });
});


self.addEventListener('install', function (event) {
  console.log('Installed sw.js');
});

self.addEventListener('activate', function (event) {
  console.log('Activated sw.js');
});
