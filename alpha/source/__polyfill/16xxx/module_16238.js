// Module ID: 16238
// Function ID: 16239
// Dependencies: [16239, 16240, 16242, 1159, 16244, 16243]
// Exports: getCanonicalLocales

// Module 16238
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 16239 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 16240 */;
import likelySubtags from "likelySubtags" /* 16243 */;
import _mod16244 from "module_16244" /* 16244 */;
import module_1159_mod from "module_1159" /* 1159 */;

const require = globalThis.__r;

let module_1159 = module_1159_mod;
module_1159.__exportStar(emitUnicodeLanguageId, exports);
module_1159 = module_1159_mod;
module_1159.__exportStar(_mod16244, exports);
module_1159 = module_1159_mod;
module_1159.__exportStar(likelySubtags, exports);

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
