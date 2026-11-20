// Module ID: 15399
// Function ID: 15400
// Name: collations
// Dependencies: [15400]
// Exports: getSupportedCollations

// Module 15399 (collations)
import _mod15400 from "module_15400" /* 15400 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15400.collations;
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
}
