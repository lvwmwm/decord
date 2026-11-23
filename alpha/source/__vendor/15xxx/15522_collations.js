// Module ID: 15522
// Function ID: 15523
// Name: collations
// Dependencies: [15523]
// Exports: getSupportedCollations

// Module 15522 (collations)
import _mod15523 from "module_15523" /* 15523 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15523.collations;
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
