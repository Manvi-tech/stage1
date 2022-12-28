
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './events/event-detail.component';
import { HomeComponentComponent } from './home/home-component.component';
import { ProductAddComponent } from './products/product-add.component';


//created  a Routes array
//Routes
//[ { path , component},
//{  path , component , } ]
const routes: Routes = [
  {path:'events/:id',component:EventDetailComponent},
  {path:'addProduct',component:ProductAddComponent},
  {path:'',pathMatch:'full' ,component:HomeComponentComponent}]
  // {path:'',pathMatch:'full' ,component:AppComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
