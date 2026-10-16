// Module ID: 14523
// Function ID: 14524
// Dependencies: [14524, 14525, 14527, 1172, 14529, 14528]
// Exports: getCanonicalLocales

// Module 14523
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14524 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 14525 */;
import likelySubtags from "likelySubtags" /* 14528 */;
import _mod14529 from "module_14529" /* 14529 */;
import module_1172_mod from "module_1172" /* 1172 */;

const require = globalThis.__r;

let module_1172 = module_1172_mod;
module_1172.__exportStar(emitUnicodeLanguageId, exports);
module_1172 = module_1172_mod;
module_1172.__exportStar(_mod14529, exports);
module_1172 = module_1172_mod;
module_1172.__exportStar(likelySubtags, exports);

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
