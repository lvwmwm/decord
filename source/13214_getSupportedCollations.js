// Module ID: 13214
// Function ID: 101624
// Name: getSupportedCollations
// Dependencies: [13215]

// Module 13214 (getSupportedCollations)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCollations = function getSupportedCollations(locale) {
  const _require = locale;
  const collations = _require(13215).collations;
  return collations.filter((arg0) => {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    const combined = "".concat(str, "-u-co-");
    Intl.Collator(combined.concat(arg0)).resolvedOptions().collation === arg0;
  });
};
