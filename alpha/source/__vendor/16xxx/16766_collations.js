// Module ID: 16766
// Function ID: 16767
// Name: collations
// Dependencies: [16767]
// Exports: getSupportedCollations

// Module 16766 (collations)
import _mod16767 from "module_16767" /* 16767 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod16767.collations;
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
