var story = document.querySelector(".storyiyan")
var flscreen = document.querySelector(".fullscreen")
var pike = ""
var arr = [
{
     dp: "https://cdn.pixabay.com/photo/2023/10/02/13/27/woman-8289221_640.jpg",
     story: "https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_1280.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2023/09/23/14/22/dahlia-8271071_640.jpg",
     story: "https://cdn.pixabay.com/photo/2023/09/23/14/22/dahlia-8271071_640.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_640.jpg",
     story: "https://cdn.pixabay.com/photo/2023/08/11/08/11/cold-8183087_640.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2023/09/21/17/41/sports-8267310_640.jpg",
     story: "https://cdn.pixabay.com/photo/2023/08/24/20/46/bicycle-8211559_640.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2023/09/05/12/29/boy-8235025_1280.jpg",
     story: "https://cdn.pixabay.com/photo/2016/11/08/05/11/children-1807511_640.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2023/09/21/06/43/insect-8266115_1280.jpg",
     story: "https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_640.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2023/07/05/11/14/alpaca-8108043_640.png",
     story: "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_640.jpg"
},
{
     dp: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png",
     story: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg"
},
]
arr.forEach(function (elem, id) {
     pike += `<div class="story">
     <img id="${id}" src="${elem.dp}" alt="">
</div>`
})
story.innerHTML = pike

story.addEventListener("click",function(dets){
     flscreen.style.display = "block"
     flscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
     setTimeout(function(){
          flscreen.style.display = "none"
     },1500)
})