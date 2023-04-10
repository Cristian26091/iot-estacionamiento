import { Component, OnInit } from '@angular/core';
import { FirestoreService} from '../services/firebase.service';

@Component({
  selector: 'app-caseta',
  templateUrl: './caseta.component.html',
  styleUrls: ['./caseta.component.css']
})
export class CasetaComponent implements OnInit {
  private isOcupado: boolean = false;
  private caseta: string = "";

  public constructor(private firestoreService:FirestoreService){


  }

  ngOnInit(): void {
    // this.firestoreService.setDoc(this.caseta,this.isOcupado);
    this.firestoreService.getDoc().subscribe((data) => {
      console.log(data);
    });
  }

  ocuparCaseta() {
    // revisar el estado en la base de datos de la caseta 1

    this.isOcupado = true;
   

  }
}
