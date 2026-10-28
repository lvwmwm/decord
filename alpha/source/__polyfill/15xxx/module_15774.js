// Module ID: 15774
// Function ID: 15775
// Dependencies: [15775, 15776, 15778, 1171, 15780, 15779]
// Exports: getCanonicalLocales

// Module 15774
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15775 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15776 */;
import likelySubtags from "likelySubtags" /* 15779 */;
import _mod15780 from "module_15780" /* 15780 */;
import module_1171_mod from "module_1171" /* 1171 */;

const require = globalThis.__r;

let module_1171 = module_1171_mod;
module_1171.__exportStar(emitUnicodeLanguageId, exports);
module_1171 = module_1171_mod;
module_1171.__exportStar(_mod15780, exports);
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
