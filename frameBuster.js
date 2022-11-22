()=>{
    window.console.log(11111);
    try{
        if (typeof window !== "undefined") {
            if(document){
            
            document.addEventListener("DOMContentLoaded", function () {
              if (self == top) {
                // Everything checks out, show the page.
                document.documentElement.style.display = 'block'
                } else {
                // Break out of the frame.
                top.location = self.location
                }
    
              })
          }
          
      
      }
    }catch{

    }
    
}

