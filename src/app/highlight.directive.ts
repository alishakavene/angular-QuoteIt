import { Directive, ElementRef, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appHighlighter]'
})
export class HighLightDirective {
  constructor(private el: ElementRef) { } 
  @HostListener('mouseenter') Enter() {
    this.highlight('purple');
    
  } 
  private highlight(color: string) {
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.backgroundColor = color;
  }
  
}


