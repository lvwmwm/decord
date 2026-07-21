// Module ID: 9141
// Function ID: 71652
// Name: useUserVerificationState
// Dependencies: []
// Exports: useSetInitialVerificationEffect

// Module 9141 (useUserVerificationState)
function useUserVerificationState() {
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStoresObject(items, () => {
    const currentUser = currentUser.getCurrentUser();
    const obj = {};
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    obj[callback(closure_1[4]).UserVerificationFieldPlatforms.EMAIL] = null != verified && verified;
    let isPhoneVerifiedResult;
    if (null != currentUser) {
      isPhoneVerifiedResult = currentUser.isPhoneVerified();
    }
    obj[callback(closure_1[4]).UserVerificationFieldPlatforms.PHONE] = null != isPhoneVerifiedResult && isPhoneVerifiedResult;
    return obj;
  });
}
function useInitialVerification(id) {
  const arg1 = id;
  const items = [closure_4];
  const items1 = [id];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => initialVerificationState.getInitialVerificationState(arg0), items1);
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const setInitialVerification = arg1(dependencyMap[2]).setInitialVerification;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = function useSetInitialVerificationEffect(guildId) {
  const arg1 = guildId;
  const obj = { initial: useInitialVerification(guildId), current: useUserVerificationState() };
  const dependencyMap = obj;
  const React = React.useRef(obj);
  const effect = React.useEffect(() => {
    closure_2.current = obj;
  });
  const items = [guildId];
  const effect1 = React.useEffect(() => {
    if (null == ref.current.initial) {
      callback(arg0, tmp);
    }
  }, items);
  return obj.initial;
};
export { useUserVerificationState };
export { useInitialVerification };
