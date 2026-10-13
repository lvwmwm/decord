// Module ID: 14856
// Function ID: 14857
// Name: collations
// Dependencies: [14857]
// Exports: getSupportedCollations

// Module 14856 (collations)
import _mod14857 from "module_14857" /* 14857 */;


export const getSupportedCollations = function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod14857.collations;
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
