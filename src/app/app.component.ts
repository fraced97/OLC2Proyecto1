import { Component } from '@angular/core';


/*const defaults = {
  Welcome:
    'Compiladores 2 Proyecto 1 \n By Fredy Estuardo Ramírez Moscosos \n 201700350',
};*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OLC2Proyecto1';
  ///mode: keyof typeof defaults = 'Welcome';
  //defaults = defaults;
}
