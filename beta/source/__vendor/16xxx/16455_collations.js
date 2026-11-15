// Module ID: 16455
// Function ID: 16456
// Name: collations
// Dependencies: [16456]
// Exports: getSupportedCollations

// Module 16455 (collations)
import _mod16456 from "module_16456" /* 16456 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod16456.collations;
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
