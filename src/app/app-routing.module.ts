import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent  } from './create-account/create-account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { CreateCategoryComponent  } from './create-category/create-category.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id', component: CategoryComponent },
  { path: 'categories/create', component: CreateCategoryComponent },
  { path: 'accounts/create', component: CreateAccountComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/create', component: CreateTransactionComponent },
  { path: 'transactions/:id', component: TransactionComponent },
  { path: 'accounts/:id', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
