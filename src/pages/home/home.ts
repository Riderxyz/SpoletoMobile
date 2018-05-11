import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


export interface Item {
  nome: string,
  quantidade: number
}



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  honey:any
  constructor(public navCtrl: NavController, public afs: AngularFirestore) {
    this.itemCollection = this.afs.collection('Molhos'); 

   this.afs.collection('Molhos').valueChanges().subscribe((s)=>{
      console.log('Acho q é iisso', s);
      this.honey = s
      
    })
 
  }

}
