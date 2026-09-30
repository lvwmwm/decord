// Module ID: 14476
// Function ID: 14477
// Name: UniqueUsernamesUtils
// Dependencies: [5051, 14471, 1115, 2]
// Exports: formatUsernameLiveCheckValidation

// Module 14476 (UniqueUsernamesUtils)
import util from "util" /* 1115 */;
import _mod5051 from "module_5051" /* 5051 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 14471 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(arg0) {
  const match = _mod5051.match(arg0);
  let obj = { error: null };
  const P = _mod5051.P;
  obj.error = P.not(_mod5051.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.PgfBSx);
    return obj;
  });
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.ERROR, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.mCrAUb);
    return obj;
  });
  const obj2 = { error: _mod5051.P.nullish };
  return withResult3.with({ error: _mod5051.P.nullish }, () => ({ type: UniqueUsernamesTypes.NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};
