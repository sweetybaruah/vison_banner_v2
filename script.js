const left = document.querySelector('.element1')
const right = document.querySelector('.element2')
const tab = document.querySelector('#zip_tab')
var perc = 4.631828978622328;

tab.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0].clientY; 
    if(touch < 0) {
      touch = 0
    }    
    
    if(perc > 1 ) {
      $("#zip_tab").removeClass('updown');
      // $("#zip_tab").addClass('overflow');

    }else{
      $("#zip_tab").addClass('updown');
    }
    
    var touch_perc = (touch/window.innerHeight)*100
    if(touch_perc > 20.267993874425727) {
      touch_perc = 20.267993874425727

      // $("#zip_tab").addClass('overflow');

      setTimeout(() => {
        $(".element1").addClass('hidden');
        $(".element2").addClass('hidden');
        $("#zip_tab").remove();
        $(".slide_1").remove();
        setTimeout(() => {
          $(".slide_2").removeClass('hidden');
          setTimeout(()=>{
            $(".part_1").removeClass('hidden');
            $(".element3").removeClass('hidden');
            setTimeout(()=>{

                $(".part_1").addClass('hidden');
                $(".part_2").removeClass('hidden');
              },700)
          },500)
          

          $(".slide_2").removeClass('hidden').addClass('zoomIn');
        },0);
      }, 500);

      

    }  

  
    document.documentElement.style.setProperty('--open', (touch_perc*2.2)+'%')
    tab.style.top = touch_perc+'%'
  }, false);



  
  dragElement(tab);
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      tab.classList.toggle('grabbing')
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
  
      pos2 = pos4 - e.clientY;
      pos4 = e.clientY;
      // set the element's new position:
      var newY = elmnt.offsetTop - pos2
      var perc = ((elmnt.offsetTop - pos2)/window.innerHeight)*100
      console.log(perc)
      if(perc < 0) {
        perc = 0
      }

      
      if(perc > 1 ) {
        $("#zip_tab").removeClass('updown');
        
      }else{
        $("#zip_tab").addClass('updown');
      }


      if(perc > 23.267993874425727) {
        perc = 23.267993874425727
        // $("#zip_tab").addClass('overflow');

        setTimeout(() => {
          $(".element1").addClass('hidden');
          $(".element2").addClass('hidden');
          $("#zip_tab").remove();
          $(".slide_1").remove();
          setTimeout(() => {
            $(".slide_2").removeClass('hidden').addClass('zoomIn');
            setTimeout(()=>{
                $(".part_1").removeClass('hidden').addClass('zoomIn');
                setTimeout(()=>{
                    $(".part_1").addClass('hidden')
                    $(".element3").removeClass('hidden');
                    $(".part_2").removeClass('hidden').addClass('zoomIn');
                },700)
            },500)
          },0);
        }, 500);

      }
      // $(".slider2").removeClass('.hidden');
      // $(".slider2").addClass('.fadeInZoom');

      
     
      
     

      elmnt.style.top = (perc ) + '%'
      document.documentElement.style.setProperty('--open', (perc*2.2)+'%')
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
      tab.classList.toggle('grabbing')
    }
  }