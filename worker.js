


this.addEventListener('install', function(event) {
		console.log("install");
});

this.addEventListener('fetch', function(e) {


		console.log("fetch");
console.log(e);
  e.respondWith(
    new Promise(function(resolve) {
resolve();      
    })
  );
}.bind(this));
