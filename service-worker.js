/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "84fb5ea2af3c5ea392282794bce556da"
  },
  {
    "url": "assets/css/1.styles.9aca09e9.css",
    "revision": "9d33ffd598e79fdb002a53cd9cb7541e"
  },
  {
    "url": "assets/css/styles.9fa5fc6b.css",
    "revision": "c14c60409c278118954b28ee23ed6146"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9aca09e9.js",
    "revision": "7769dcaf02531ff0fc009ad9a7e27156"
  },
  {
    "url": "assets/js/2.34975b4e.js",
    "revision": "458623a8e25efd63490848527ae3b1af"
  },
  {
    "url": "assets/js/app.9fa5fc6b.js",
    "revision": "14f93bfc89730fa3cfdafae2651bf88f"
  },
  {
    "url": "index.html",
    "revision": "c0b893ad5c135650d5318a8815d36aaf"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "service/zh-cn.html",
    "revision": "a9c80bb054910ba6dedbb5dc3c351af2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
