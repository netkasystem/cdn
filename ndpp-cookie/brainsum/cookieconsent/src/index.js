import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
import CookieConsent from './lib/CookieConsent';
import Utilities from "./lib/Utilities";

const cookieConsent = new CookieConsent();

window.CookieConsent = window.CookieConsent || {};
window.CookieConsent.init = cookieConsent.init;
Utilities.dispatchEvent(document, 'onBrainsumLoad');
