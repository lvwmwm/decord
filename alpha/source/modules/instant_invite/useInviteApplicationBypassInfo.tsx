// Module ID: 18325
// Function ID: 18326
// Name: useInviteApplicationBypassInfo
// Dependencies: [4707, 1085, 558, 576, 504, 2]

// Module 18325 (useInviteApplicationBypassInfo)
import PermissionStore from "PermissionStore" /* 4707 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ GuildFeatures: c3, Permissions: closure_4 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInviteApplicationBypassInfo(features) {
  let first;
  let tmp11;
  let tmp6;
  let tmp7;
  _require = features;
  const obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== features) {
    const fn = function p() {
      return PermissionStore.can(constants.KICK_MEMBERS, features);
    };
    const items1 = [features];
    cResult[1] = features;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let features1;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = cResult[4];
  if (features != null) {
    features1 = features.features;
  }
  if (tmp9 !== features1) {
    let hasItem;
    if (features != null) {
      features = features.features;
      hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (hasItem) {
      let hasItem1;
      if (features != null) {
        const features2 = features.features;
        hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
      }
      hasItem = hasItem1;
    }
    let features3;
    if (features != null) {
      features3 = features.features;
    }
    cResult[4] = features3;
    cResult[5] = hasItem;
    tmp11 = hasItem;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp11) {
    let tmp19;
    if (cResult[7] === (tmp11 && stateFromStores)) {
      tmp19 = cResult[8];
    }
    return tmp19;
  }
  const obj2 = { canCreateApplicationBypassInvites: tmp11 && stateFromStores, isManualApprovalGuild: tmp11 };
  cResult[6] = tmp11;
  cResult[7] = tmp11 && stateFromStores;
  cResult[8] = obj2;
  tmp19 = obj2;
}) : (function useInviteApplicationBypassInfo(features) {
  _require = features;
  const items = [PermissionStore];
  const items1 = [features];
  let hasItem;
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.KICK_MEMBERS, features), items1);
  if (features != null) {
    features = features.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  let tmp4 = !hasItem;
  if (hasItem) {
    let hasItem1;
    if (features != null) {
      const features2 = features.features;
      hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
    }
    tmp4 = !hasItem1;
  }
  const isManualApprovalGuild = !tmp4;
  const canCreateApplicationBypassInvites = isManualApprovalGuild && stateFromStores;
  return { canCreateApplicationBypassInvites, isManualApprovalGuild };
});
const result = size.fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = tmp3;
