// Module ID: 13250
// Function ID: 101893
// Name: isStructurallyValidLanguageTag
// Dependencies: [13251, 13252, 13254, 1257, 13256, 13255]
// Exports: getCanonicalLocales

// Module 13250 (isStructurallyValidLanguageTag)
import createExporter from "createExporter";
import createExporter from "createExporter";
import createExporter from "createExporter";

createExporter.__exportStar(require("emitUnicodeLanguageId"), exports);
createExporter.__exportStar(require("__exportStarResult1"), exports);
createExporter.__exportStar(require("__exportStarResult2"), exports);

export const getCanonicalLocales = function getCanonicalLocales(items) {
  if (undefined === items) {
    items = [];
  } else {
    const items1 = [];
    let arr2 = items;
    if ("string" === typeof items) {
      const items2 = [items];
      arr2 = items2;
    }
    let num4 = 0;
    items = items1;
    if (0 < arr2.length) {
      do {
        let tmp = require;
        let tmp2 = dependencyMap;
        let emitUnicodeLocaleIdResult = require(13251) /* emitUnicodeLanguageId */.emitUnicodeLocaleId(require(13252) /* canonicalizeKVs */.CanonicalizeUnicodeLocaleId(require(13254) /* isUnicodeLanguageSubtag */.parseUnicodeLocaleId(arr2[num4])));
        if (items1.indexOf(emitUnicodeLocaleIdResult) < 0) {
          let arr = items1.push(emitUnicodeLocaleIdResult);
        }
        num4 = num4 + 1;
        items = items1;
      } while (num4 < arr2.length);
    }
  }
  return items;
};
export const isStructurallyValidLanguageTag = require(13254) /* isUnicodeLanguageSubtag */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(13254) /* isUnicodeLanguageSubtag */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(13254) /* isUnicodeLanguageSubtag */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(13254) /* isUnicodeLanguageSubtag */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(13254) /* isUnicodeLanguageSubtag */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(13254) /* isUnicodeLanguageSubtag */.parseUnicodeLocaleId;
