// Module ID: 13774
// Function ID: 105592
// Name: formatUsernameLiveCheckValidation
// Dependencies: [4364, 13769, 1212, 2]
// Exports: formatUsernameLiveCheckValidation

// Module 13774 (formatUsernameLiveCheckValidation)
const result = require("getSystemLocale").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(stateFromStores) {
  const match = require(4364) /* n */.match(stateFromStores);
  const str = require(4364) /* n */;
  let obj = {};
  const P = require(4364) /* n */.P;
  obj.error = P.not(require(4364) /* n */.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.RATE_LIMIT };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.RATE_LIMIT };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: outer1_0(outer1_1[1]).NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.RATE_LIMIT };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: outer1_0(outer1_1[1]).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.AVAILABLE };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.PgfBSx);
    return obj;
  });
  obj = { error: require(4364) /* n */.P.nullish };
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.RATE_LIMIT };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: outer1_0(outer1_1[1]).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.AVAILABLE };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.ERROR };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.mCrAUb);
    return obj;
  });
  return match.with({ rateLimited: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.RATE_LIMIT };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: outer1_0(outer1_1[1]).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.AVAILABLE };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: outer1_0(outer1_1[1]).NameValidationState.ERROR };
    const intl = outer1_0(outer1_1[2]).intl;
    obj.message = intl.string(outer1_0(outer1_1[2]).t.mCrAUb);
    return obj;
  }).with(obj, () => ({ type: outer1_0(outer1_1[1]).NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};
