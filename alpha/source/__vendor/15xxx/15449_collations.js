// Module ID: 15449
// Function ID: 15450
// Name: collations
// Dependencies: [15450]
// Exports: getSupportedCollations

// Module 15449 (collations)
import _mod15450 from "module_15450" /* 15450 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15450.collations;
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
