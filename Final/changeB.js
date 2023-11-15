var bg = ['./assets/background.jpg','https://th.bing.com/th/id/OIP.Bxe5ES-Sl_mkg19J4SLCZAHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','https://t3.ftcdn.net/jpg/05/68/58/98/360_F_568589845_lWhcXz7Plm0ubhWjdGe1vU3Z6ZNwqR98.jpg']
document.querySelector("#bg1").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[1];
})
document.querySelector("#bg3").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[2];
})