// Module ID: 9149
// Function ID: 71717
// Name: useUserVerificationState
// Dependencies: [31, 1849, 9150, 566, 3950, 2]
// Exports: useSetInitialVerificationEffect

// Module 9149 (useUserVerificationState)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { setInitialVerification } from "_isNativeReflectConstruct";

const require = arg1;
function useUserVerificationState() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresObject(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    const obj = {};
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    obj[outer1_0(outer1_1[4]).UserVerificationFieldPlatforms.EMAIL] = null != verified && verified;
    let isPhoneVerifiedResult;
    if (null != currentUser) {
      isPhoneVerifiedResult = currentUser.isPhoneVerified();
    }
    obj[outer1_0(outer1_1[4]).UserVerificationFieldPlatforms.PHONE] = null != isPhoneVerifiedResult && isPhoneVerifiedResult;
    return obj;
  });
}
function useInitialVerification(id) {
  const _require = id;
  const items = [closure_4];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => outer1_4.getInitialVerificationState(closure_0), items1);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = function useSetInitialVerificationEffect(guildId) {
  let closure_0 = guildId;
  const obj = { initial: useInitialVerification(guildId), current: useUserVerificationState() };
  React = React.useRef(obj);
  const effect = React.useEffect(() => {
    result.current = obj;
  });
  const items = [guildId];
  const effect1 = React.useEffect(() => {
    if (null == ref.current.initial) {
      outer1_5(closure_0, tmp);
    }
  }, items);
  return obj.initial;
};
export { useUserVerificationState };
export { useInitialVerification };
