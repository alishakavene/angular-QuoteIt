import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: 'myUnderline'
})
export class UnderlineDirective{

    constructor(
        public renderer: Renderer2,
        public el: ElementRef
    ){}
  
    @HostListener('mouseenter') Enter() {
        this.hover(true);
    }

    @HostListener('mouseleave') Leave() {
        this.hover(false);
    }
  
    hover(shouldUnderline: boolean){
        if(shouldUnderline){
      
		
    this.el.nativeElement.style.textDecoration='underline';
        } else {
		
     this.el.nativeElement.style.textDecoration='none';
        }
    }
}