import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articoli } from '../models/articoli';

@Injectable({
    providedIn: 'root'
})
export class ArticoliDataService {

    constructor(private httpClient:HttpClient) { }
    
    getArticoli() {
        return this.httpClient.get<Articoli[]>(`http://localhost:5002/api/rest`);
}}