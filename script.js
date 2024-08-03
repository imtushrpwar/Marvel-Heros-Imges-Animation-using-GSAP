var tl = gsap.timeline({ // use to perform animation one by one
    repeat: -1  // repeat -1 is for repeat animation in infinite times
})

tl
.to("#imagecontainer",{
        ease: Expo.easeInOut,
        width: "100%",
        stagger: 2 
    },"a") // here "a" is flag i.e. for animate same flag at one time
    
.to(".text h1",{
        ease: Expo.easeInout,
        stagger: 2,
        top: 0,
        
    },"a")

.to(".text h1",{  //closing animation
        delay: 2,
        ease: Expo.easeInout,
        stagger: 2,
        top: "-100%"
        
    },"a")
    
    // tl.to("#imagecontainer",{  //closing animation
    //     delay: 2,
    //     ease: Expo.easeInOut,
    //     width: 0,
    //     stagger: 2  
    // })



  


