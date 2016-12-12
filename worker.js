var getRequest = function(url){
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = "text/json";

                

                xhr.onload = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            var res = xhr.response;
							console.log(res);
                        }else{
                            onError();
                        }
                    }
                };

                xhr.onerror = function(){
                    console.log('xhr.onerror')
                };

                xhr.onabort = function(){
                    console.log('xhr.onabort')                   
                };

                xhr.ontimeout = function(){
                    xhr.abort();
                };

                xhr.send();

            };


this.addEventListener('install', function(event) {
		console.log("install");
});

this.addEventListener('fetch', function(e) {


		console.log("fetch");
getRequest('https://dioong.github.io/service-worker-wiki/api/read.txt');

  e.respondWith(
    new Promise(function(resolve) {
resolve();      
    })
  );
}.bind(this));
