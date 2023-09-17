'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf87920d3c068412c7e9828033ad91e9",
".git/config": "e219823542da223741e36a0e1c4afd8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "13b70e09a54b7e42a9a5f80ed6d76246",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2425ca15efff059c82300c815a24340b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da0e780e8f0e827f1351f2f7ef805794",
".git/logs/refs/heads/main": "1b36967e8348825be21648807cb5c94f",
".git/logs/refs/remotes/origin/main": "14d4a35b787a9cc9732e68b17b757c95",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/f3e7675787a1470b8b24713cc5ea48de8ddcc0": "3f1a9d0804c4b7c1fd400caba05d4358",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/4e37e05d64f88020902c18f22a64fdb4fa2c4f": "6835e2c226ca84369fc196d2586e06ca",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2c/189c44dcc168005fe2c7f6c8757bf538ca6f29": "77f580078f0667f972a25cd913625144",
".git/objects/2e/76092d7fbb27d8c636360a5cb95d86f856e078": "c0f3037e43aae9d1c75b18c8dac093c4",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/4af90cf9ad04d3d8e3b6ad54b9a7c5d05ddc06": "99338f32577f927fabc8d074e35c55d0",
".git/objects/42/bf1fe0ede565bab0fb78fc0afe8598a8df9320": "d3b61ed1665eaf074b15a81832ac2719",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7f79f1aff91b89346017911516907580cb647f": "3c4de00cee35c317d644884cce671c73",
".git/objects/4e/e6a871aef822d087ec7b200d8e9662984194d8": "17217311e404cb5efb04fa692a5998fe",
".git/objects/4f/c60cc3693b1db3b30317e98fa73c583889420c": "b9b491672d3fe369ff4a60d836add826",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/822096097a397bbbd7c841057050cf0f69f32a": "a15c08cb79bfc9185e3554c76055dd94",
".git/objects/5d/da49c26306ac1a5e19d4e0fe487dc44200991e": "73bd32dcc16cfc5c2baf7d6d301beb06",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/c3b085161d0f7b97a976094b75cf8a740a0193": "f82c96031a7653ee60c882abf81ffcb8",
".git/objects/6b/cd972ab4ac44bb21aece7b3f46d7f03c326c4f": "129c63ed15bab5fee6b079e1bffc76ea",
".git/objects/6b/f9297cf55b515cc61fecd059e603163f48aeba": "450546ad1dd082d2a7510e2495b9e972",
".git/objects/6d/35e0357b8e22c743f73038fb1b043686b6fd14": "3a01572cddad7cc6534cb10216aa0fef",
".git/objects/6d/a18fa1229b621bbcb736226225cf163756eb63": "4a856ab7fd9da777bfc5e29f002fe19a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7d/73b5914c0ccbf9fae49c1a17b3b30d50552d44": "d8b238039d183367acdfd8baefb8e01d",
".git/objects/7f/ec379c61e0ac88938592b41af1849b98fe6c0b": "d29219a7b08c95e900a96bd422f8edc8",
".git/objects/81/c7c7ec6e33052a2f13f59261b56ebef521e284": "37b3c0ef5f5067fe06ded91d7ea3dda0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/78a2800799e082513044844f290d6390f629c7": "84282fa9250da814aab2e8c46fe080c0",
".git/objects/89/c5c0dac46b8d8dd73a06b8d19120dd3ab27672": "656255c9bedfb77855bee756e672df68",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/5c0580d6d9a163e7a63dc4672ba70a5920b0df": "4660bc6b1bde48f992fa34ae741513a4",
".git/objects/9a/a6e7235d9da5170fd1fdd61541c77ec7be9ba9": "fd5546623b1ae9170c16f92ee6c63229",
".git/objects/9b/c9211999a0b0ae4952170210ea135df12bb02f": "f8229fa54e60d7e10f87d2450b52d8a0",
".git/objects/a2/433dfe720e8ce42576f35a0db156d9b8fa0794": "9cdf4d71c6c88dd0075797011f42b0b7",
".git/objects/a7/948d3874f9d9c81f530620770e6eaefa6c8831": "ae678111f5edd69860fd1b4301f79fba",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/7ae68c986d787608a2922da280ae4f216329b3": "270f84de995a7d62c61b6db0a9fd104a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/51685d5f0b3344ec1ae2adee7701bdf54d0247": "45876f98d95ad864e16b277f7d8b07ac",
".git/objects/b6/c5aa35951349d79222955916e0c6778c4de213": "fccc932aa2bdc481018f6cb02a0c2e9f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/900ceadf2ea65a9040bd78d2859c29bfb72411": "54b2afb46ab806cf71b593f0d96f38af",
".git/objects/c7/cc46d7c4f6140a7107422f93282230c28841e9": "ac49017d73bc34cd83dbfd140093c081",
".git/objects/ca/1f6e635c30b0da3df23045bfaa5b22e0fafb5c": "3638c6fe20d985ee51f13e13962c7a10",
".git/objects/ca/fb42878fa7dae6f5f3436a87e68bd7370a73a7": "6689f861ff4bc845d48480df3fb5b462",
".git/objects/ce/8f6d767d875d438ef1204b461dd91ca19bfc51": "b867d75b090e3d011ef5ed7e3d890e65",
".git/objects/d2/ba606681e9873381f839ec63fadcf8d90db005": "06f5a3e209cc414b3b5e0dc175a2335f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a1a7df6dbbe8ed6c13841dd15280a3e10ec7f1": "baca1e7aaf7954f6d5aded213052766b",
".git/objects/da/19b679400ee755fff72ce48d5e70b0550e8971": "081cb3640241eb98eb2c491d925de69e",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/93b90bd391daa8cf717c4a9441247389874daf": "beadd0187f2e0ba4f0b4b0e30ed9ddd2",
".git/ORIG_HEAD": "abe7dff615e9d01c3831ec840170440e",
".git/refs/heads/main": "e167fe8568391819d226643334677d83",
".git/refs/remotes/origin/main": "e167fe8568391819d226643334677d83",
"assets/AssetManifest.bin": "f73833aeba0a66be689fe1dc99073c9a",
"assets/AssetManifest.json": "d1427801fceb64c505b197e9028e59d3",
"assets/assets/images/111.png": "536e79e4a3681d3a958fd2caade8e5b3",
"assets/assets/images/222.png": "801428db42a65a2c6a04936ed03ae86b",
"assets/assets/images/333.png": "db619a138980628bd6cea21f29ecd0d7",
"assets/assets/images/444.png": "a2e41f5a9032fed0fb554ac659454c96",
"assets/assets/images/555.png": "a467716269966f86320bd88061a7852c",
"assets/assets/images/666.png": "381e53fd8e45d295c8ce20cdb2159f7d",
"assets/assets/images/category.jpeg": "aaea9a26580d356cd8d3903cf95b8b8a",
"assets/assets/images/product.png": "feace64a09ddea94954d7bb490802892",
"assets/assets/images/top_card.jpg": "657163980b438128253c2a9279a50633",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5933dc14469e1d332d465ebb84e5e230",
"assets/NOTICES": "21f7a79f33f0f3223a5919c6508ac2d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4fb248c8064757a0001b65b37157dfae",
"/": "4fb248c8064757a0001b65b37157dfae",
"main.dart.js": "95e61aa2eef0c467c88245fa3c04bf1c",
"manifest.json": "d7ab31aad00e9cffe853ffdcddd85f4c",
"version.json": "f811d0d6aeeb142a97a108fdcaae2b58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
