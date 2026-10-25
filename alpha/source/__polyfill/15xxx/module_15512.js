// Module ID: 15512
// Function ID: 15513
// Dependencies: [15513, 15514, 15516, 1174, 15518, 15517]
// Exports: getCanonicalLocales

// Module 15512
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15513 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15514 */;
import likelySubtags from "likelySubtags" /* 15517 */;
import _mod15518 from "module_15518" /* 15518 */;
import module_1174_mod from "module_1174" /* 1174 */;

const require = globalThis.__r;

let module_1174 = module_1174_mod;
module_1174.__exportStar(emitUnicodeLanguageId, exports);
module_1174 = module_1174_mod;
module_1174.__exportStar(_mod15518, exports);
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
