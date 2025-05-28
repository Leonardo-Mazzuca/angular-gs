import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]',
  standalone: true
})
export class HoverBorderDirective {

  @Input('appHoverBorder') borderColor: string = '#1E90FF';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeBorder();
  }

  private setBorder(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }

  private removeBorder() {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}
