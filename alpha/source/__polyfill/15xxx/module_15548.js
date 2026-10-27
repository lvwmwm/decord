// Module ID: 15548
// Function ID: 15549
// Dependencies: [15549, 15550, 15552, 1171, 15554, 15553]
// Exports: getCanonicalLocales

// Module 15548
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15549 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15550 */;
import likelySubtags from "likelySubtags" /* 15553 */;
import _mod15554 from "module_15554" /* 15554 */;
import module_1171_mod from "module_1171" /* 1171 */;

const require = globalThis.__r;

let module_1171 = module_1171_mod;
module_1171.__exportStar(emitUnicodeLanguageId, exports);
module_1171 = module_1171_mod;
module_1171.__exportStar(_mod15554, exports);
module_1171 = module_1171_mod;
module_1171.__exportStar(likelySubtags, exports);

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
