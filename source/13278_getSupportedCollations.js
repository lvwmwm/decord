// Module ID: 13278
// Function ID: 102078
// Name: getSupportedCollations
// Dependencies: [13279]

// Module 13278 (getSupportedCollations)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCollations = function getSupportedCollations(locale) {
  const _require = locale;
  const collations = _require(13279).collations;
  return collations.filter((arg0) => {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    const combined = "".concat(str, "-u-co-");
    Intl.Collator(combined.concat(arg0)).resolvedOptions().collation === arg0;
  });
};
