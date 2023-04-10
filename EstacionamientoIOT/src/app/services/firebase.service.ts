import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(
        private db: AngularFireDatabase,
    ) { }
    getDoc() {
        return this.db.object('estacionamiento').valueChanges();
    }
    setDoc(caseta: string, estado: boolean) {
        return this.db.object("estacionamiento/caseta"+caseta).set({
            'caseta': caseta,
            'estado': estado
        });
    }
}
