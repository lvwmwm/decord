// Module ID: 13462
// Function ID: 13463
// Name: getSupportedCollations
// Dependencies: [13463]

// Module 13462 (getSupportedCollations)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCollations = function getSupportedCollations(locale) {
  const _require = locale;
  const collations = _require(13463).collations;
  return collations.filter((arg0) => (function isSupported(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const _Intl = Intl;
      const concat = "".concat;
      const combined = "".concat(str, "-u-co-");
      return Intl.Collator(combined.concat(arg0)).resolvedOptions().collation === arg0;
    } catch (err) {
      return false;
    }
  })(arg0, closure_0));
};
