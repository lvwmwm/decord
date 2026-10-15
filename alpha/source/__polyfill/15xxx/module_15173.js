// Module ID: 15173
// Function ID: 15174
// Dependencies: [15174, 15175, 15177, 1172, 15179, 15178]
// Exports: getCanonicalLocales

// Module 15173
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15174 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15175 */;
import likelySubtags from "likelySubtags" /* 15178 */;
import _mod15179 from "module_15179" /* 15179 */;
import module_1172_mod from "module_1172" /* 1172 */;

const require = globalThis.__r;

let module_1172 = module_1172_mod;
module_1172.__exportStar(emitUnicodeLanguageId, exports);
module_1172 = module_1172_mod;
module_1172.__exportStar(_mod15179, exports);
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
