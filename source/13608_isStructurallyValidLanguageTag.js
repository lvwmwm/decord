// Module ID: 13608
// Function ID: 13609
// Name: isStructurallyValidLanguageTag
// Dependencies: [13609, 13610, 13612, 1281, 13614, 13613]
// Exports: getCanonicalLocales

// Module 13608 (isStructurallyValidLanguageTag)
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
    if (typeof items === "string") {
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
        let emitUnicodeLocaleIdResult = require(13609) /* emitUnicodeLanguageId */.emitUnicodeLocaleId(require(13610) /* compareKV */.CanonicalizeUnicodeLocaleId(require(13612) /* parseUnicodeLanguageId */.parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require(13612) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(13612) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(13612) /* parseUnicodeLanguageId */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(13612) /* parseUnicodeLanguageId */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(13612) /* parseUnicodeLanguageId */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(13612) /* parseUnicodeLanguageId */.parseUnicodeLocaleId;
