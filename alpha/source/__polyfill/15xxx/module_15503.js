// Module ID: 15503
// Function ID: 15504
// Dependencies: [15504, 15505, 15507, 1158, 15509, 15508]
// Exports: getCanonicalLocales

// Module 15503
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15504 */;
import canonicalizeUnicodeLanguageId from "canonicalizeUnicodeLanguageId" /* 15505 */;
import likelySubtags from "likelySubtags" /* 15508 */;
import _mod15509 from "module_15509" /* 15509 */;
import module_1158_mod from "module_1158" /* 1158 */;

const require = globalThis.__r;

let module_1158 = module_1158_mod;
module_1158.__exportStar(emitUnicodeLanguageId, exports);
module_1158 = module_1158_mod;
module_1158.__exportStar(_mod15509, exports);
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
