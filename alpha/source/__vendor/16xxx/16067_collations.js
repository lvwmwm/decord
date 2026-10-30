// Module ID: 16067
// Function ID: 16068
// Name: collations
// Dependencies: [16068]
// Exports: getSupportedCollations

// Module 16067 (collations)
import _mod16068 from "module_16068" /* 16068 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod16068.collations;
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
