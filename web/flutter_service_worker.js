'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bef42efad92eec95ae33cdbd7d3a7a1a",
"version.json": "4228a21c7a369bd97ccacee91afb21da",
"index.html": "06a55885826de5502204132fcad47bec",
"/": "06a55885826de5502204132fcad47bec",
"main.dart.js": "616a36146401784c11d10b1d76d7dfe1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b1e24b424cc6668e130db11eae6e578",
"assets/AssetManifest.json": "50059c775ac8d5c3c3f034546866f4c1",
"assets/NOTICES": "021e5a714ee5370d0e1aa9c001e8397c",
"assets/FontManifest.json": "69aeb5f0b35c23771fa77fb77a5e72e3",
"assets/AssetManifest.bin.json": "3d657e86c1b5f38634a56ab1eb98c41e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "48af8871b380bb0b60d6371e5bcc7095",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b65421e6f93eff8a730844894606a253",
"assets/fonts/MaterialIcons-Regular.otf": "f592436c67c3d14e062ce39a1ada9838",
"assets/assets/images/upload-minimalistic.svg": "51f55dd96672f271d058762c63521a65",
"assets/assets/images/evolution.png": "4c34752759ac97513fc9ac041808cbfb",
"assets/assets/images/person.svg": "53eb20358a46abc3836e5a7b9d0a8c82",
"assets/assets/images/image-picture.svg": "8f844228ae0ebd89d70efd3de004332a",
"assets/assets/images/selection-box.svg": "3712a888d3d7655d531670a88b0bd0eb",
"assets/assets/images/address.svg": "3fe1bc599748918a2634aedf7527a18d",
"assets/assets/images/section2.jpg": "e94d6260bbaa1d14c36d6bc7390e236c",
"assets/assets/images/section3.jpg": "c8c6e7e8a788dc820b34bbfed672af43",
"assets/assets/images/shapes.svg": "f7a4a373a515dabd63efe74f6323638a",
"assets/assets/images/image-plus.svg": "797996801453e2cab4ae0e32c1522438",
"assets/assets/images/design.svg": "2c75bdac19730fb2a4f100b609d03f19",
"assets/assets/images/email.svg": "f4aa6d560b9974823a486e4f404fbdfb",
"assets/assets/images/text-size.svg": "da574458b1167de937957739aa169849",
"assets/assets/images/logic.svg": "91f44dc0737371e9d07de6cff980e4a2",
"assets/assets/images/separator.svg": "73f4457b8c1ce81fe0df8117a94d5e81",
"assets/assets/images/text-fields.svg": "7a98b321c161e05a87f8a9bc3b0025ef",
"assets/assets/images/telephone.svg": "81732d66d47c6fd801a82594d3a996e4",
"assets/assets/images/legal.svg": "19a993b6e5f9a022f001c76d9fa9bda1",
"assets/assets/images/file-plus.svg": "7c94340282af020f00df96fb0f5d96f6",
"assets/assets/images/dropdown.svg": "c18818e2209c3fe33433fd084194a954",
"assets/assets/images/description.svg": "4339f00a643a2c0cd9b2c95a3f70a8b9",
"assets/assets/images/image-cover.svg": "c2c3a82045387bd7ac8a48e73ab890b5",
"assets/assets/images/whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/assets/images/logo.svg": "835942b904f7b627d04a2b3bd0f197d6",
"assets/assets/images/yin-yang.svg": "ea6e3a3071f4d144a963458f713e336a",
"assets/assets/images/cercle.svg": "bebceb3076a09b2ff26b7983b7e4c8ab",
"assets/assets/fonts/Rubik/Rubik-VariableFont_wght.ttf": "6d3102fa33194bef395536d580f91b56",
"assets/assets/fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf": "b98b18526d653e20777cacb1f43f62c4",
"assets/assets/fonts/Rubik/static/Rubik-MediumItalic.ttf": "4790a18709e781a0994dc17d04fd66f5",
"assets/assets/fonts/Rubik/static/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik/static/Rubik-SemiBoldItalic.ttf": "a8a77ad44dbe8c031ce7b5442661610f",
"assets/assets/fonts/Rubik/static/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/Rubik/static/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Rubik/static/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/Rubik/static/Rubik-Italic.ttf": "17538a8196fb1d1fab888c5941acf9ec",
"assets/assets/fonts/Rubik/static/Rubik-LightItalic.ttf": "ac5353ac12658ccfd7eca99a25be7037",
"assets/assets/fonts/Rubik/static/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/fonts/Rubik/static/Rubik-BlackItalic.ttf": "db5b8553106c0268251f65367ecfc3a0",
"assets/assets/fonts/Rubik/static/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/Rubik/static/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Rubik/static/Rubik-BoldItalic.ttf": "dc069fd43e202359cfef038ce28b20ac",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
