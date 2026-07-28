// Module ID: 13323
// Function ID: 102256
// Name: getSupportedCollations
// Dependencies: [13324]

// Module 13323 (getSupportedCollations)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCollations = function getSupportedCollations(locale) {
  const _require = locale;
  const collations = _require(13324).collations;
  return collations.filter((arg0) => {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    const combined = "".concat(str, "-u-co-");
    Intl.Collator(combined.concat(arg0)).resolvedOptions().collation === arg0;
  });
};
