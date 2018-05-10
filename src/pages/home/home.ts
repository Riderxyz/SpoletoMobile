import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
 import firebase from 'firebase'
import 'firebase/firestore' 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items:any
db = firebase.firestore()
  constructor(public navCtrl: NavController) {

    var X = this.items = this.db.collection('Molhos').get().then(doc =>{

      console.log(doc.data());
      
    })
      

    console.log(X);
    
  }

}
