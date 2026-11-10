// Module ID: 16452
// Function ID: 16453
// Name: collations
// Dependencies: [16453]
// Exports: getSupportedCollations

// Module 16452 (collations)
import _mod16453 from "module_16453" /* 16453 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod16453.collations;
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
