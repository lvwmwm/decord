// Module ID: 13100
// Function ID: 99468
// Name: getSupportedCollations
// Dependencies: []

// Module 13100 (getSupportedCollations)
arg5.getSupportedCollations = function getSupportedCollations(locale) {
  const arg1 = locale;
  const collations = arg1(arg6[0]).collations;
  return collations.filter((arg0) => {
    let str = arg0;
    if (undefined === arg0) {
      str = "en";
    }
    const combined = "".concat(str, "-u-co-");
    Intl.Collator(combined.concat(arg0)).resolvedOptions().collation === arg0;
  });
};
