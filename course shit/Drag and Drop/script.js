document.addEventListener('DOMContentLoaded', function() {
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    
    fill.addEventListener('dragstart',dragStart);
    fill.addEventListener('dragend',dragEnd);
    
    for(const empty of empties){
        empty.addEventListener('dragover',dragOver);
        empty.addEventListener('dragenter',dragEnter);
        empty.addEventListener('dragleave',dragLeave);
        empty.addEventListener('drop',dragDrop);
    }
    
    function dragStart(){
        // += Used to append the class of hold idk why we put space before tho.
        this.className += ' hold';
        // Dat is why we use setTimeout --> Just so that Hold class happens first
        setTimeout(()=> this.className = 'invisible',0);
        // As Soon as I click the box, it adds class invisible, and makes it invisible before I can drag it
        // this.className = 'invisible'; --> No longer used

        // But now if I drop the box anywhere it gets deleted.
    }
    
    function dragEnd(){
        // code below allows block to return to place
        this.className = 'fill'; 
    }
    
    function dragOver(e){
        e.preventDefault();
    }
    
    function dragEnter(e){
        e.preventDefault();
        this.className += ' hovered';
    }
    
    function dragLeave(){
        console.log('drag leave');
        this.className = 'empty';
    }
    
    function dragDrop(){
        this.className = 'empty';
        this.append(fill);
        // this.className += ' fill'; Test if this works idk
    }
      });
