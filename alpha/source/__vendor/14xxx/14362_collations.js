// Module ID: 14362
// Function ID: 14363
// Name: collations
// Dependencies: [14363]
// Exports: getSupportedCollations

// Module 14362 (collations)
import _mod14363 from "module_14363" /* 14363 */;


export const getSupportedCollations = function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod14363.collations;
  return collations.filter((item) => {
    function isSupported(item, arg1) {
      let str = arg1;
      if (undefined === arg1) {
        str = "en";
      }
      try {
        const _Intl = Intl;
        const concat = "".concat;
        const combined = "".concat(str, "-u-co-");
        const CollatorResult = Collator(combined.concat(item));
        return CollatorResult.resolvedOptions().collation === item;
      } catch (err) {
        return false;
      }
    }
    return isSupported(item, closure_0);
  });
};
