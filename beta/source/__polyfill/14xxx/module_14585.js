// Module ID: 14585
// Function ID: 14586
// Dependencies: [14586, 14587, 14589, 1165, 14591, 14590]
// Exports: getCanonicalLocales

// Module 14585
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14586 */;
import compareKV from "compareKV" /* 14587 */;
import likelySubtags from "likelySubtags" /* 14590 */;
import _mod14591 from "module_14591" /* 14591 */;
import e_mod from "e" /* 1165 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod14591, exports);
let e = e_mod;
e.__exportStar(likelySubtags, exports);

export const getCanonicalLocales = function getCanonicalLocales(items) {
  if (undefined === items) {
    items = [];
  } else {
    let arr3 = items;
    if (typeof items === "string") {
      const items1 = [items];
      arr3 = items1;
    }
    const items2 = [];
    let num3 = 0;
    items = items2;
    if (0 < arr3.length) {
      do {
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14589").parseUnicodeLocaleId(arr3[num3])));
        if (items2.indexOf(emitUnicodeLocaleIdResult) < 0) {
          let arr = items2.push(emitUnicodeLocaleIdResult);
        }
        num3 = num3 + 1;
        items = items2;
      } while (num3 < arr3.length);
    }
  }
  return items;
};
export const isStructurallyValidLanguageTag = require("module_14589").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_14589").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14589").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14589").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14589").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14589").parseUnicodeLocaleId;
