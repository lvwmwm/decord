// Module ID: 16491
// Function ID: 128527
// Name: useInviteApplicationBypassInfo
// Dependencies: [3758, 653, 566, 2]
// Exports: useInviteApplicationBypassInfo

// Module 16491 (useInviteApplicationBypassInfo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_3;
let closure_4;
const require = arg1;
({ GuildFeatures: closure_3, Permissions: closure_4 } = ME);
const result = require("initialize").fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = function useInviteApplicationBypassInfo(guild) {
  const _require = guild;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [guild];
  let tmp2 = null == guild;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_2.can(outer1_4.KICK_MEMBERS, closure_0), items1);
  if (!tmp2) {
    const features = guild.features;
    tmp2 = !features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (!tmp2) {
    tmp2 = null == guild;
  }
  if (!tmp2) {
    const features2 = guild.features;
    tmp2 = !features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  obj = {};
  let tmp6 = tmp5;
  if (!tmp2) {
    tmp6 = stateFromStores;
  }
  obj.canCreateApplicationBypassInvites = tmp6;
  obj.isManualApprovalGuild = !tmp2;
  return obj;
};
