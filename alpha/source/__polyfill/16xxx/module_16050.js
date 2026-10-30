// Module ID: 16050
// Function ID: 16051
// Dependencies: [16051, 16052, 16054, 1160, 16056, 16055]
// Exports: getCanonicalLocales

// Module 16050
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 16051 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 16052 */;
import likelySubtags from "likelySubtags" /* 16055 */;
import _mod16056 from "module_16056" /* 16056 */;
import module_1160_mod from "module_1160" /* 1160 */;

const require = globalThis.__r;

let module_1160 = module_1160_mod;
module_1160.__exportStar(emitUnicodeLanguageId, exports);
module_1160 = module_1160_mod;
module_1160.__exportStar(_mod16056, exports);
module_1160 = module_1160_mod;
module_1160.__exportStar(likelySubtags, exports);

export function getCanonicalLocales(items) {
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
}
export const isStructurallyValidLanguageTag = require("SEPARATOR").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("SEPARATOR").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("SEPARATOR").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("SEPARATOR").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("SEPARATOR").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("SEPARATOR").parseUnicodeLocaleId;
