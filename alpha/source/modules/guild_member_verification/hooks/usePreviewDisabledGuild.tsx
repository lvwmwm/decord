// Module ID: 7090
// Function ID: 7091
// Name: usePreviewDisabledGuild
// Dependencies: [19, 5014, 7086, 504, 7060, 5006, 2]
// Exports: default

// Module 7090 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 7060 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7086 */;
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
      const tmpResult = tmp(5006);
      result = tmpResult.fromVerificationGateGuild(stateFromStores1);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};
