// Module ID: 15706
// Function ID: 15707
// Dependencies: [15707, 15708, 15710, 1158, 15712, 15711]
// Exports: getCanonicalLocales

// Module 15706
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15707 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15708 */;
import likelySubtags from "likelySubtags" /* 15711 */;
import _mod15712 from "module_15712" /* 15712 */;
import module_1158_mod from "module_1158" /* 1158 */;

const require = globalThis.__r;

let module_1158 = module_1158_mod;
module_1158.__exportStar(emitUnicodeLanguageId, exports);
module_1158 = module_1158_mod;
module_1158.__exportStar(_mod15712, exports);
module_1158 = module_1158_mod;
module_1158.__exportStar(likelySubtags, exports);

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
