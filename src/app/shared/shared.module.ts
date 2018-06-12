import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoProductsFoundComponent } from "./components/no-products-found/no-products-found.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
// import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from "angularfire2/database";
import { FormsModule, FormBuilder } from "@angular/forms";
import { ToastyModule } from "ng2-toasty";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
// import { FireBaseConfig } from "../../environments/firebaseConfigDummy";
import { FilterByKindPipe } from "./pipes/filterByKind.pipe";
import { ProductService } from "./services/product.service";
import { AdminGaurd } from "./services/admin-gaurd";
import { AuthGuard } from "./services/auth_gaurd";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { LoaderSpinnerService } from "./loader-spinner/loader-spinner";

import { NoticeService } from "./services/notice.service";
import { FaqService } from "./services/faq.service";
import { QnaService } from "./services/qna.service";
import { SearchService } from "./services/search.service";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    // AngularFireModule.initializeApp(FireBaseConfig),
    // AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ToastyModule.forRoot(),
    OwlModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDMbxW3MlwUP2vrAZVJyu7pYqZa1LthvTE"
    })
  ],
  declarations: [
    NoProductsFoundComponent,
    FilterByKindPipe,
    NoAccessComponent,
    PageNotFoundComponent
  ],
  exports: [
    NoProductsFoundComponent,
    FormsModule,
    MDBBootstrapModule,
    // AngularFireModule,
    // AngularFireDatabaseModule,
    FormsModule,
    ToastyModule,
    RouterModule,
    OwlModule,
    NgxPaginationModule,
    FilterByKindPipe,
    AgmCoreModule,
    NoAccessComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGaurd,
    ProductService,
    UserService,
    FormBuilder,
    LoaderSpinnerService,
    NoticeService,
    FaqService,
    QnaService,
    SearchService
  ]
})
export class SharedModule {}
