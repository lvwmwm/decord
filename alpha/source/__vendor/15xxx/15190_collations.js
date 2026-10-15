// Module ID: 15190
// Function ID: 15191
// Name: collations
// Dependencies: [15191]
// Exports: getSupportedCollations

// Module 15190 (collations)
import _mod15191 from "module_15191" /* 15191 */;


export const getSupportedCollations = function getSupportedCollations(locale) {
  let closure_0 = locale;
  const collations = _mod15191.collations;
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
};
