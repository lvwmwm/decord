// Module ID: 13546
// Function ID: 102774
// Name: formatUsernameLiveCheckValidation
// Dependencies: []
// Exports: formatUsernameLiveCheckValidation

// Module 13546 (formatUsernameLiveCheckValidation)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(stateFromStores) {
  const match = require(dependencyMap[0]).match(stateFromStores);
  const str = require(dependencyMap[0]);
  let obj = {};
  const P = require(dependencyMap[0]).P;
  obj.error = P.not(require(dependencyMap[0]).P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.RATE_LIMIT };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.RATE_LIMIT };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(closure_1[1]).NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.RATE_LIMIT };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(closure_1[1]).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.AVAILABLE };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.PgfBSx);
    return obj;
  });
  obj = { error: require(dependencyMap[0]).P.nullish };
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.RATE_LIMIT };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(closure_1[1]).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.AVAILABLE };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.ERROR };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.mCrAUb);
    return obj;
  });
  return match.with({ rateLimited: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.RATE_LIMIT };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(closure_1[1]).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.AVAILABLE };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(closure_1[1]).NameValidationState.ERROR };
    const intl = callback(closure_1[2]).intl;
    obj.message = intl.string(callback(closure_1[2]).t.mCrAUb);
    return obj;
  }).with(obj, () => ({ type: callback(closure_1[1]).NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};
