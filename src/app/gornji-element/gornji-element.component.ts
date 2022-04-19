import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Element } from '../element';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gornji-element',
  templateUrl: './gornji-element.component.html',
  styleUrls: ['./gornji-element.component.css']
})
export class GornjiElementComponent implements OnInit {

  element: Element = {id: 0, visina:'', sirina:'', dubina:''};
  
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }

  Prihvati(): void{
    this.element.visina = (<HTMLInputElement>document.getElementById("element-visina")).value + "a";
  }
  goBack(): void{
    this.location.back();
  }
}
