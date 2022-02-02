export default class Utilities {

  static ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  static objectType(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  static lightenDarkenColor(col, amt) {

    var usePound = false;
  
    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }
  
    var num = parseInt(col, 16);
  
    var r = (num >> 16) + amt;
  
    if (r > 255) {
      r = 255;
    } else if (r < 0) {
       r = 0;
    }
  
    var b = ((num >> 8) & 0x00FF) + amt;
  
    if (b > 255) {
      b = 255;
    } else if (b < 0) {
      b = 0;
    }
  
    var g = (num & 0x0000FF) + amt;
  
    if (g > 255) {
      g = 255;
    } else if (g < 0) {
      g = 0;
    }
  
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  
  }

  static removeCookie() {
    document.cookie = `cconsent=; expires=Thu, 01 Jan 1980 00:00:00 UTC; path=/;`;
  }

  // Create an array of services from Cookieconsent global object
  // Filter based on category or leave empty is all is wanted
  static listGlobalServices(category) {
    let services = [];

    // Global config objectnot set
    if (typeof window.CookieConsent === 'undefined') return services;

    let categories = category ?? window.CookieConsent.config.categories;
    let categoriesKey = [];
    for (let key in categories) {
      if (categories[key]?.wanted){
        categoriesKey.push(key);
      }
    }

    for (let key in window.CookieConsent.config.services) {
      if (categoriesKey.includes(window.CookieConsent.config.services[key].category)) {
        services.push(key);
      }
    }
    
    return services;
  }

  static dispatchEvent(elem, event) {
    var event;

    if (typeof(Event) === 'function') {
      event = new Event(event);
    } else {
      event = document.createEvent('Event');
      event.initEvent(event, true, true);
    }
    
    elem.dispatchEvent(event);
  }

}
