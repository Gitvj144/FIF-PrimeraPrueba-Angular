import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.getOS(navigator.platform)
    const reqClone = req.clone({
      headers: this.getHeaders()
    });

    return next.handle(reqClone);
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'x-user-browser': this.getBrowser(navigator.userAgent),
      'x-user-os': 'lainux'
    });

    return headers;
  }

  getBrowser(browserDescription) {
    let flag = true;
    let userBrowser = 'Unknown';
    const browsers = ['Firefox', 'Chrome', 'Safari', 'Opera', 'MSIE'];

    browsers.forEach(browser => {
      if (flag) {
        if (browserDescription.indexOf(browser) !== -1) {
          flag = false;
          userBrowser = browser;
        }
      }
    });

    return userBrowser;
  }

  getOS(platform) {
    let flag = true;
    let userOS = 'Unknown';
    const platforms = [{Platform: 'Win', Value: 'Windows OS'},
      {Platform: 'Linux', Value: 'Linux OS'},
      {Platform: 'Mac', Value: 'MacOS'},
      {Platform: 'X11', Value: 'Unix OS'},
      {Platform: 'Android', Value: 'Android OS'},
      {Platform: 'iPhone ', Value: 'iOS'},
      {Platform: 'iPod ', Value: 'iOS'},
      {Platform: 'iPad ', Value: 'iOS'},
      {Platform: 'Nintendo', Value: 'Nintendo System'},
      {Platform: 'PLAYSTATION 3', Value: 'Playstation System'},
      {Platform: 'PlayStation 4', Value: 'Playstation System'},
      {Platform: 'PSP', Value: 'Playstation System'}
    ];

    platforms.forEach(element => {
      if (flag) {
        if (platform.indexOf(element.Platform) !== -1) {
          flag = false;
          userOS = element.Value;
        }
      }
    });

    return userOS;
  }

}
