// Module ID: 14089
// Function ID: 14090
// Name: formatUsernameLiveCheckValidation
// Dependencies: [4554, 14084, 1236, 2]
// Exports: formatUsernameLiveCheckValidation

// Module 14089 (formatUsernameLiveCheckValidation)
const result = require("getSystemLocale").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(arg0) {
  const match = require(4554) /* t */.match(arg0);
  const str = require(4554) /* t */;
  let obj = { error: null };
  const P = require(4554) /* t */.P;
  obj[0] = P.not(require(4554) /* t */.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14084).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14084).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14084).NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14084).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14084).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14084).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  });
  obj = { error: require(4554) /* t */.P.nullish };
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14084).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14084).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14084).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(14084).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  });
  return match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14084).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14084).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14084).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(14084).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  }).with(obj, () => ({ type: callback(14084).NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};
