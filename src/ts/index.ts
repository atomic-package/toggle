/*
 * Author: Daisuke Takayama
 */
'use strict';
let e = eval, global: NodeJS.Global = e('this');

import Toggle from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      toggle: Toggle
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = Toggle;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }

  if (typeof global.AP.toggle === 'undefined') {
    Object.assign(global.AP, { toggle: new Toggle });
  }
}
