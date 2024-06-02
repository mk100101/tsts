import { Routes } from '@angular/router';
import { DecomisanCargamentoComponent } from './nacional/decomisan-cargamento/decomisan-cargamento.component';


export const routes: Routes = [
    { path: 'panama/nacional/importante-captura-e-incautacion-de-droga-en-puerto-colon-DLLE566962', component: DecomisanCargamentoComponent},
    { path: '', redirectTo: 'panama/nacional/importante-captura-e-incautacion-de-droga-en-puerto-colon-DLLE566962', pathMatch: 'full'}
];
