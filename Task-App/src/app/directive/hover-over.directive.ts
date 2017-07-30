// Importing required services for directives.
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector : "[hoverOverElement]"
})
export class HoverOverComponent {
    
    constructor(private elem: ElementRef) {

    }

    // Hostlistener for mouseenter event.
    @HostListener('mouseenter', ['$event'])
    OnMouseEnter(event: any) {
        const row = event.target.innerText;
        var q = new Date();
        var m = q.getMonth()+1;
        var d = q.getDay();
        var y = q.getFullYear();

        let currentDate = new Date(y,m,d);
        let taskDate = new Date(row);
        
        if(currentDate > taskDate) {
           this.colorChange('red'); // If task completion date over.
        }
         else if(currentDate < taskDate) {
          this.colorChange('green'); // If task completion date is ahead.
        }
        else {
          this.colorChange('orange'); // If task completion same as current date.
        }
 
    }
    
    //HostListener for mouseleave event.
    @HostListener('mouseleave')
    OnMouseLeave() {
      this.colorChange(null); // Make it as before.
    }
    
    private colorChange(color:string) {
      this.elem.nativeElement.style.backgroundColor = color; // Change color of text
    }
}