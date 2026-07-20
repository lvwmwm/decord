// Module ID: 13067
// Function ID: 99332
// Name: isStructurallyValidLanguageTag
// Dependencies: []
// Exports: getCanonicalLocales

// Module 13067 (isStructurallyValidLanguageTag)
const _module = require(dependencyMap[3]);
_module.__exportStar(require(dependencyMap[0]), exports);
const _module1 = require(dependencyMap[3]);
_module1.__exportStar(require(dependencyMap[4]), exports);
const _module2 = require(dependencyMap[3]);
_module2.__exportStar(require(dependencyMap[5]), exports);

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
        let tmp = closure_0;
        let tmp2 = closure_1;
        let emitUnicodeLocaleIdResult = closure_0(closure_1[0]).emitUnicodeLocaleId(closure_0(closure_1[1]).CanonicalizeUnicodeLocaleId(closure_0(closure_1[2]).parseUnicodeLocaleId(arr2[num4])));
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
export const isStructurallyValidLanguageTag = require(dependencyMap[2]).isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(dependencyMap[2]).isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(dependencyMap[2]).isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(dependencyMap[2]).isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(dependencyMap[2]).parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(dependencyMap[2]).parseUnicodeLocaleId;
