import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommonService } from './common.service';
@Injectable()
export class TransporterService extends CommonService{

  constructor(private http:Http) {
    super();
    console.log(this.url);
 }

}
