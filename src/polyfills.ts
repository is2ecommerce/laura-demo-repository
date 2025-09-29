/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes recent versions of Safari, Chrome (including
 * Opera), Edge on the desktop, and iOS and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will disable zone-js patches for the browser. When not specified, they all default to `true`:
 * Zone.js installs `requestAnimationFrame` patch by default and uses macroTask to apply the patch.
 * You can disable this by setting `__Zone_disable_requestAnimationFrame = true`
 *
 * Zone.js loads Error.captureStackTrace as part of the Angular core module.
 * You can disable this by setting `__Zone_disable_Error_ZoneAwareError = true`
 *
 * Zone.js installs `onunhandledrejection` patch by default for the browser. This patch is async and might cause some issues with
 * certain test frameworks and debugging tools. If you need to disable the patch, you can set `__Zone_disable_on_property = true`
 *
 * NOTE: the flags must be prefixed with __Zone_
 *
 * Documentation for Zone.js patches can be found at https://github.com/angular/zone.js/blob/master/STANDARD-APIS.md
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */