// Module ID: 13197
// Function ID: 101566
// Name: isStructurallyValidLanguageTag
// Dependencies: [13198, 13199, 13201, 1257, 13203, 13202]
// Exports: getCanonicalLocales

// Module 13197 (isStructurallyValidLanguageTag)
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
        let emitUnicodeLocaleIdResult = require(13198) /* emitUnicodeLanguageId */.emitUnicodeLocaleId(require(13199) /* canonicalizeKVs */.CanonicalizeUnicodeLocaleId(require(13201) /* isUnicodeLanguageSubtag */.parseUnicodeLocaleId(arr2[num4])));
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
export const isStructurallyValidLanguageTag = require(13201) /* isUnicodeLanguageSubtag */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(13201) /* isUnicodeLanguageSubtag */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(13201) /* isUnicodeLanguageSubtag */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(13201) /* isUnicodeLanguageSubtag */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(13201) /* isUnicodeLanguageSubtag */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(13201) /* isUnicodeLanguageSubtag */.parseUnicodeLocaleId;
