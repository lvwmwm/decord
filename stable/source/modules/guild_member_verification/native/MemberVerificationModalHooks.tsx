// Module ID: 7038
// Function ID: 7039
// Name: MemberVerificationModalHooks
// Dependencies: [19, 1385, 7039, 504, 5206, 2]
// Exports: useInitialVerification, useSetInitialVerificationEffect, useUserVerificationState

// Module 7038 (MemberVerificationModalHooks)
import get_initialized from "get initialized" /* 504 */;
import InitialMemberVerificationStore2 from "InitialMemberVerificationStore" /* 7039 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InitialMemberVerificationStore = InitialMemberVerificationStore2;
let _require, currentUser;

const f91394 = () => {
  let obj;
  currentUser = currentUser.getCurrentUser();
  let flag;
  const EMAIL = guildId(obj[4]).UserVerificationFieldPlatforms.EMAIL;
  const tmp = guildId;
  const tmp2 = obj;
  if (currentUser != null) {
    flag = currentUser.verified;
  }
  if (flag == null) {
    flag = false;
  }
  obj = {};
  obj[EMAIL] = flag;
  let flag2;
  const PHONE = tmp(tmp2[4]).UserVerificationFieldPlatforms.PHONE;
  if (currentUser != null) {
    flag2 = currentUser.isPhoneVerified();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  obj[PHONE] = flag2;
  return obj;
};
const f91395 = () => initialVerificationState.getInitialVerificationState(closure_0);
let react = react_mod;
const setInitialVerification = InitialMemberVerificationStore2.setInitialVerification;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export function useSetInitialVerificationEffect(guildId) {
  let initialVerificationState;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj3;
  let ref;
  const current = { initial: obj2.useStateFromStores(items, f91395, items1), current: obj3.useStateFromStoresObject(items2, f91394) };
  _require = guildId;
  items = [InitialMemberVerificationStore];
  items1 = [guildId];
  items2 = [UserStore];
  obj2 = require("get initialized");
  obj3 = require("get initialized");
  react = react.useRef(current);
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const items3 = [guildId];
  const effect1 = react.useEffect(() => {
    if (null == ref.current.initial) {
      setInitialVerification(guildId, tmp);
    }
  }, items3);
  return current.initial;
}
export function useUserVerificationState() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, f91394);
}
export function useInitialVerification(id) {
  _require = id;
  const items = [InitialMemberVerificationStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f91395, items1);
}
