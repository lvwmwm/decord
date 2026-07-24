// Module ID: 13271
// Function ID: 101959
// Name: getSupportedNumberingSystems
// Dependencies: [13186, 13272]

// Module 13271 (getSupportedNumberingSystems)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedNumberingSystems = function getSupportedNumberingSystems(locale) {
  const _require = locale;
  const numberingSystemNames = _require(13272).numberingSystemNames;
  return numberingSystemNames.filter((arg0) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const combined = "".concat(str, "-u-nu-");
    const memoizedNumberFormat = locale(outer1_1[0]).createMemoizedNumberFormat(combined.concat(arg0));
  });
};
