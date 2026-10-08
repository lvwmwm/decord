// Module ID: 6157
// Function ID: 6158
// Name: usePreviewDisabledGuild
// Dependencies: [19, 2086, 6153, 558, 576, 504, 6127, 2078, 2]

// Module 6157 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6127 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 6153 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreviewDisabledGuild(arg0) {
  let closure_0;
  let first;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MemberVerificationFormStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function v() {
      const value = MemberVerificationFormStore.get(closure_0);
      let guild;
      if (value != null) {
        guild = value.guild;
      }
      return guild;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (cResult[6] !== arg0) {
    const fn3 = function _() {
      if (null != closure_0) {
        const obj = MemberVerificationActionCreatorsDefault;
        const verificationForm = obj.fetchVerificationForm(tmp);
      }
    };
    const items2 = [arg0];
    cResult[6] = arg0;
    cResult[7] = fn3;
    cResult[8] = items2;
    tmp13 = items2;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[7];
    tmp13 = cResult[8];
  }
  const effect = react.useEffect(tmp12, tmp13);
  if (cResult[9] === stateFromStores) {
    let tmp15;
    if (cResult[10] === stateFromStores1) {
      tmp15 = cResult[11];
    }
    return tmp15;
  }
  let tmp16 = stateFromStores;
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      const tmpResult4 = tmp(2078);
      result = tmpResult4.fromVerificationGateGuild(stateFromStores1);
    }
    tmp16 = result;
  }
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores1;
  cResult[11] = tmp16;
  tmp15 = tmp16;
}) : (function usePreviewDisabledGuild(arg0) {
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
      const tmpResult = tmp(2078);
      result = tmpResult.fromVerificationGateGuild(stateFromStores1);
    }
    stateFromStores = result;
  }
  return stateFromStores;
});
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default tmp2;
