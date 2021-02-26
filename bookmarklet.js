javascript:void(function(){
    let script = document.createElement('script');
    script.src = "https://ruslantanasiichuk.github.io/snow.js";
    document.body.appendChild(script);
    script.onload = function(){
        let cont = {
        fps: 45,
        density: 100,
        speedY: 0,
        speedX: 2,
        sizeSnowFlake: 10,
        opacity: 0.4,
        }
        start(cont);
    }
}());