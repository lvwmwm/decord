// Module ID: 5825
// Function ID: 5826
// Name: usePreviewDisabledGuild
// Dependencies: [19, 2063, 5821, 504, 5796, 2055, 2]
// Exports: default

// Module 5825 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5796 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5821 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  _require = arg0;
  const items = [GuildStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let obj = require("initialize");
  const tmp = _require;
  const items1 = [MemberVerificationFormStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    value = MemberVerificationFormStore.get(closure_0);
    let guild;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(tmp);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(2055).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(2055);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};
