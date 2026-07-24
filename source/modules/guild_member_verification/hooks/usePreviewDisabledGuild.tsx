// Module ID: 9187
// Function ID: 71943
// Name: usePreviewDisabledGuild
// Dependencies: [31, 1838, 5082, 566, 5128, 1387, 2]
// Exports: default

// Module 9187 (usePreviewDisabledGuild)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getGuild(closure_0));
  let obj = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const value = outer1_5.get(closure_0);
    let guild;
    if (null != value) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = React.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = outer1_1(outer1_2[4]).fetchVerificationForm(closure_0);
      const obj = outer1_1(outer1_2[4]);
    }
  }, items2);
  if (null == stateFromStores) {
    let result = null;
    if (null != stateFromStores1) {
      result = _require(1387).fromVerificationGateGuild(stateFromStores1);
      const obj3 = _require(1387);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};
