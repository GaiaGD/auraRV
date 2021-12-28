const otherItems = document.querySelectorAll('.toScribble');

const toScribble = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('scribbled'); 
        }else{
            entry.target.classList.remove('scribbled'); 
        }
    });
}
const io2 = new IntersectionObserver(toScribble);
 for(let i=0; i < otherItems.length; i++){
    io2.observe(otherItems[i]);
 }