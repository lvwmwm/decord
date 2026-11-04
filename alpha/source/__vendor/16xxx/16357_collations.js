// Module ID: 16357
// Function ID: 16358
// Name: collations
// Dependencies: [16358]
// Exports: getSupportedCollations

// Module 16357 (collations)
import _mod16358 from "module_16358" /* 16358 */;


export function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod16358.collations;
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
