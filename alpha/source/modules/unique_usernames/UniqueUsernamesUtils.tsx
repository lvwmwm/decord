// Module ID: 16505
// Function ID: 16506
// Name: UniqueUsernamesUtils
// Dependencies: [6543, 16500, 1125, 2]
// Exports: formatUsernameLiveCheckValidation

// Module 16505 (UniqueUsernamesUtils)
import intl2 from "intl" /* 1125 */;
import merged5 from "merged5" /* 6543 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 16500 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export function formatUsernameLiveCheckValidation(arg0) {
  let P;
  const f127990 = () => {
    let intl;
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: intl.string(intl2.t.T15lqn) };
    intl = intl2.intl;
    return obj;
  };
  const str = merged5;
  const match = str.match(arg0);
  let obj = { error: P.not(merged5.P.nullish) };
  const _with = match.with({ rateLimited: true }, f127990).with;
  match.with({ rateLimited: true }, f127990);
  P = merged5.P;
  const _withResult = _with(obj, (error) => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error };
    return obj;
  });
  const withResult1 = _withResult.with({ taken: false }, () => {
    let intl;
    const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: intl.string(intl2.t.PgfBSx) };
    intl = intl2.intl;
    return obj;
  });
  const withResult2 = withResult1.with({ taken: true }, () => {
    let intl;
    const obj = { type: UniqueUsernamesTypes.NameValidationState.ERROR, message: intl.string(intl2.t.mCrAUb) };
    intl = intl2.intl;
    return obj;
  });
  const obj2 = { error: merged5.P.nullish };
  const withResult3 = withResult2.with(obj2, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.INTERNAL_ERROR, message: "" };
    return obj;
  });
  return withResult3.otherwise(() => {

  });
}
