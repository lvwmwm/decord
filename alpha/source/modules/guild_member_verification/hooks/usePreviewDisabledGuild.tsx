// Module ID: 7032
// Function ID: 7033
// Name: usePreviewDisabledGuild
// Dependencies: [19, 5041, 7028, 504, 7002, 5033, 2]
// Exports: default

// Module 7032 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 7002 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7028 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const items1 = [MemberVerificationFormStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const value = MemberVerificationFormStore.get(closure_0);
    let guild;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj = MemberVerificationActionCreatorsDefault;
      const verificationForm = obj.fetchVerificationForm(tmp);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      const tmpResult = tmp(5033);
      result = tmpResult.fromVerificationGateGuild(stateFromStores1);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};
