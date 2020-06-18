import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: 'myUnderline'
})
export class UnderlineDirective{

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ){}
  // Event listeners for element hosting the directive
    @HostListener('mouseenter') Enter() {
        this.hover(true);
    }

    @HostListener('mouseleave') Leave() {
        this.hover(false);
    }
  // Event method to be called on mouse enter and on mouse leave
    hover(shouldUnderline: boolean){
        if(shouldUnderline){
        // Mouse enter   
		//this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    this.el.nativeElement.style.textDecoration='underline';
        } else {
		// Mouse leave           
		//this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
     this.el.nativeElement.style.textDecoration='none';
        }
    }
}