// Module ID: 15546
// Function ID: 15547
// Dependencies: [15547, 15548, 15550, 1174, 15552, 15551]
// Exports: getCanonicalLocales

// Module 15546
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15547 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15548 */;
import likelySubtags from "likelySubtags" /* 15551 */;
import _mod15552 from "module_15552" /* 15552 */;
import module_1174_mod from "module_1174" /* 1174 */;

const require = globalThis.__r;

let module_1174 = module_1174_mod;
module_1174.__exportStar(emitUnicodeLanguageId, exports);
module_1174 = module_1174_mod;
module_1174.__exportStar(_mod15552, exports);
module_1174 = module_1174_mod;
module_1174.__exportStar(likelySubtags, exports);

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
        let tmp = arr3[num3];
        let emitUnicodeLocaleId = emitUnicodeLanguageId.emitUnicodeLocaleId;
        let emitUnicodeLocaleIdResult = emitUnicodeLocaleId(canonicalizeUnicodeLanguageId.CanonicalizeUnicodeLocaleId(require("SEPARATOR").parseUnicodeLocaleId(tmp)));
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
export const isStructurallyValidLanguageTag = require("SEPARATOR").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("SEPARATOR").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("SEPARATOR").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("SEPARATOR").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("SEPARATOR").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("SEPARATOR").parseUnicodeLocaleId;
