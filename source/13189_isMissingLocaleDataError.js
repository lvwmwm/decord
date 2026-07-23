// Module ID: 13189
// Function ID: 101554
// Name: isMissingLocaleDataError
// Dependencies: [1257]

// Module 13189 (isMissingLocaleDataError)
const require = arg1;
const dependencyMap = arg6;
arg5.isMissingLocaleDataError = function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
};
((Error) => {
  const _require = Error;
  _require(1257).__extends(function MissingLocaleDataError() {
    const self = this;
    let applyResult = null !== _Error;
    if (applyResult) {
      applyResult = _Error(...arguments);
    }
    if (!applyResult) {
      applyResult = self;
    }
    applyResult.type = "MISSING_LOCALE_DATA";
    return applyResult;
  }, Error);
})(Error);
