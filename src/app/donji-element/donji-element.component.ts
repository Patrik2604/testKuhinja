import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Element } from '../element';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-donji-element',
  templateUrl: './donji-element.component.html',
  styleUrls: ['./donji-element.component.css']
})
export class DonjiElementComponent implements OnInit {

  element: Element = {id: 0, visina:'', sirina:'', dubina:''};
  
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }

  Prihvati(): void{
    this.element.visina = String(getNgModuleById("element-ime")) + "a";
  }
  goBack(): void{
    this.location.back();
  }
}
