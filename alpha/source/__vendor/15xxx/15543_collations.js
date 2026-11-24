// Module ID: 15543
// Function ID: 15544
// Name: collations
// Dependencies: [15544]
// Exports: getSupportedCollations

// Module 15543 (collations)
import _mod15544 from "module_15544" /* 15544 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15544.collations;
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
