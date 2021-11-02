import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';



@Directive({

  selector: '[appIsadmin]'

})

export class IsadminDirective {

  @Input() appIsadmin: string = "";

  admin_group = ["smith", "Mark", "Scott", "Robert"]

  constructor(private viewContainer: ViewContainerRef,

    private templateRef: TemplateRef<any>) {



  }

  ngOnInit() {

    console.log(this.appIsadmin)

    if (this.admin_group.indexOf(this.appIsadmin) > -1) {

      // show

      this.viewContainer.createEmbeddedView(this.templateRef);

    }

    else {

      // hide

      this.viewContainer.clear();

    }

  }

}