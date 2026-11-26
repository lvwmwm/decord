// Module ID: 15716
// Function ID: 15717
// Name: collations
// Dependencies: [15717]
// Exports: getSupportedCollations

// Module 15716 (collations)
import _mod15717 from "module_15717" /* 15717 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15717.collations;
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
