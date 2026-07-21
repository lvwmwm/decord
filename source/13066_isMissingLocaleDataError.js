// Module ID: 13066
// Function ID: 99343
// Name: isMissingLocaleDataError
// Dependencies: []

// Module 13066 (isMissingLocaleDataError)
arg5.isMissingLocaleDataError = function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
};
(Error) => {
  const arg1 = Error;
  arg1(arg6[0]).__extends(function MissingLocaleDataError() {
    const self = this;
    let applyResult = null !== arg0;
    if (applyResult) {
      applyResult = arg0(...arguments);
    }
    if (!applyResult) {
      applyResult = self;
    }
    applyResult.type = "MISSING_LOCALE_DATA";
    return applyResult;
  }, Error);
}(Error);
