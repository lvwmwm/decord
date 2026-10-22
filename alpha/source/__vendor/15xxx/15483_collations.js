// Module ID: 15483
// Function ID: 15484
// Name: collations
// Dependencies: [15484]
// Exports: getSupportedCollations

// Module 15483 (collations)
import _mod15484 from "module_15484" /* 15484 */;


export const getSupportedCollations = function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15484.collations;
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
