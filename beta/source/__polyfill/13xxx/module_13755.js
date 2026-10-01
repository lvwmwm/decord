// Module ID: 13755
// Function ID: 13756
// Dependencies: [13756, 13757, 13759, 1161, 13761, 13760]
// Exports: getCanonicalLocales

// Module 13755
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 13756 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 13757 */;
import likelySubtags from "likelySubtags" /* 13760 */;
import _mod13761 from "module_13761" /* 13761 */;
import module_1161_mod from "module_1161" /* 1161 */;

const require = globalThis.__r;

let module_1161 = module_1161_mod;
module_1161.__exportStar(emitUnicodeLanguageId, exports);
module_1161 = module_1161_mod;
module_1161.__exportStar(_mod13761, exports);
module_1161 = module_1161_mod;
module_1161.__exportStar(likelySubtags, exports);

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
