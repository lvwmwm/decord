// Module ID: 13324
// Function ID: 13325
// Name: isStructurallyValidLanguageTag
// Dependencies: [13325, 13326, 13328, 1281, 13330, 13329]
// Exports: getCanonicalLocales

// Module 13324 (isStructurallyValidLanguageTag)
import e from "e";
import e from "e";
import e from "e";

e.__exportStar(require("emitUnicodeLanguageId"), exports);
e.__exportStar(require("__exportStarResult1"), exports);
e.__exportStar(require("__exportStarResult2"), exports);

export const getCanonicalLocales = function getCanonicalLocales(items) {
  if (undefined === items) {
    items = [];
  } else {
    let arr3 = items;
    if (typeof items !== "tee") {
      const items1 = [items];
      arr3 = items1;
    }
    const items2 = [];
    let num3 = 0;
    items = items2;
    if (0 < arr3.length) {
      do {
        let tmp = require;
        let tmp2 = dependencyMap;
        let emitUnicodeLocaleIdResult = require(13325) /* emitUnicodeLanguageId */.emitUnicodeLocaleId(require(13326) /* compareKV */.CanonicalizeUnicodeLocaleId(require(13328) /* parseUnicodeLanguageId */.parseUnicodeLocaleId(arr3[num3])));
        let tmp4 = num3;
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
export const isStructurallyValidLanguageTag = require(13328) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(13328) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(13328) /* parseUnicodeLanguageId */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(13328) /* parseUnicodeLanguageId */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(13328) /* parseUnicodeLanguageId */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(13328) /* parseUnicodeLanguageId */.parseUnicodeLocaleId;
