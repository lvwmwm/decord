// Module ID: 13757
// Function ID: 13758
// Dependencies: [13758, 13759, 13761, 1173, 13763, 13762]
// Exports: getCanonicalLocales

// Module 13757
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 13758 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 13759 */;
import likelySubtags from "likelySubtags" /* 13762 */;
import _mod13763 from "module_13763" /* 13763 */;
import module_1173_mod from "module_1173" /* 1173 */;

const require = globalThis.__r;

let module_1173 = module_1173_mod;
module_1173.__exportStar(emitUnicodeLanguageId, exports);
module_1173 = module_1173_mod;
module_1173.__exportStar(_mod13763, exports);
module_1173 = module_1173_mod;
module_1173.__exportStar(likelySubtags, exports);

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
