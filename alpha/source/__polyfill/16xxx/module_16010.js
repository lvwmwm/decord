// Module ID: 16010
// Function ID: 16011
// Dependencies: [16011, 16012, 16014, 1171, 16016, 16015]
// Exports: getCanonicalLocales

// Module 16010
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 16011 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 16012 */;
import likelySubtags from "likelySubtags" /* 16015 */;
import _mod16016 from "module_16016" /* 16016 */;
import module_1171_mod from "module_1171" /* 1171 */;

const require = globalThis.__r;

let module_1171 = module_1171_mod;
module_1171.__exportStar(emitUnicodeLanguageId, exports);
module_1171 = module_1171_mod;
module_1171.__exportStar(_mod16016, exports);
module_1171 = module_1171_mod;
module_1171.__exportStar(likelySubtags, exports);

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
