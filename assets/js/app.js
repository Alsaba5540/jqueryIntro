$(document).ready(function(){


let $box = $(".box") 
let $img = $(".img")


    $("#btnhide").on("click" , () =>{

     $box.hide()

    })

    $("#btnshow").on("click" , ()=>{
        $box.show()
    })

    $("#toggelbtn").on("click" , () => {
        $box.toggle()
    })

    $("#slideup").on("click", () =>{

        $box.slideUp("slow")

    })

    $("#slidedown").on("click" , function(){
        $box.slideDown("fast")
    })

    $("#slideToggle").on("click" , function(){
        $box.slideToggle("slow")
    })
   

    $("#fadeout").on("click" , function(){
        $box.fadeOut(2000)
    })

    $("#fadeIn").on("click" , function(){
        $box.fadeIn(3000)
    })

    $("#fadetoggle").on("click" , function(){
        $box.fadeToggle(3000)
    })

$("#animatedBtn").on("click" , function(){
    $box.animate({
        left : '300px',
        top:'300px',
        opacity :.5,
        heigth: '150px',
        width: '150px'
       


    } , 2000)
})


let url = `https://jsonplaceholder.typicode.com/posts`
$("#getdata").on("click" , function(){

get(url , function(data , respStatus){
    console.log(data)
    console.log(respStatus)

})

})

// this is for img 


$("#imghide").on("click" , () =>{

    $img.hide()

   })

   $("#imgshow").on("click" , ()=>{
       $img.show()
   })

   $("#imgtoggelbtn").on("click" , () => {
       $img.toggle()
   })

   $("#imgslideup").on("click", () =>{

       $img.slideUp("slow")

   })

   $("#imgslidedown").on("click" , function(){
       $img.slideDown("fast")
   })

   $("#imgslideToggle").on("click" , function(){
       $img.slideToggle("slow")
   })
  

   $("#imgfadeout").on("click" , function(){
       $img.fadeOut(1000)
   })

   $("#imgfadeIn").on("click" , function(){
       $img.fadeIn(2000)
   })

   $("#imgfadetoggle").on("click" , function(){
       $img.fadeToggle(3000)
   })

$("#imganimatedBtn").on("click" , function(){
   $img.animate({
     left : '300px',
       top:'300px',
       width: '200px',
       height: '200px',

      


   } , 2000)
})

})