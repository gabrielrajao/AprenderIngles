import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    standalone: true,
    templateUrl: './topo.component.html',
    styleUrl:'./topo.component.css'
})
export class TopoComponent{
    public titulo: string = 'Aprendendo Inglês';
}