// Module ID: 16731
// Function ID: 16732
// Name: collations
// Dependencies: [16732]
// Exports: getSupportedCollations

// Module 16731 (collations)
import _mod16732 from "module_16732" /* 16732 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod16732.collations;
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
