import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { GridComponent } from './grid.component';

@NgModule({
    declarations: [GridComponent],
    imports: [
        AgGridModule.withComponents(null)
    ],
    exports: [GridComponent],
    providers: []
})

export class GridModule { }