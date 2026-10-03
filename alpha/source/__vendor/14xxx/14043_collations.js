// Module ID: 14043
// Function ID: 14044
// Name: collations
// Dependencies: [14044]
// Exports: getSupportedCollations

// Module 14043 (collations)
import _mod14044 from "module_14044" /* 14044 */;


export const getSupportedCollations = function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod14044.collations;
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
