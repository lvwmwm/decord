// Module ID: 13097
// Function ID: 99443
// Name: getSupportedNumberingSystems
// Dependencies: []

// Module 13097 (getSupportedNumberingSystems)
arg5.getSupportedNumberingSystems = function getSupportedNumberingSystems(locale) {
  const arg1 = locale;
  const numberingSystemNames = arg1(arg6[1]).numberingSystemNames;
  return numberingSystemNames.filter((arg0) => {
    let str = arg0;
    if (undefined === arg0) {
      str = "en";
    }
    const combined = "".concat(str, "-u-nu-");
    const memoizedNumberFormat = arg0(closure_1[0]).createMemoizedNumberFormat(combined.concat(arg0));
  });
};
