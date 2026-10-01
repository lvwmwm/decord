// Module ID: 17625
// Function ID: 17626
// Name: useInviteApplicationBypassInfo
// Dependencies: [4469, 1074, 504, 2]
// Exports: useInviteApplicationBypassInfo

// Module 17625 (useInviteApplicationBypassInfo)
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ GuildFeatures: c3, Permissions: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = function useInviteApplicationBypassInfo(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  let hasItem;
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.KICK_MEMBERS, guild), items1);
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  let tmp4 = !hasItem;
  if (hasItem) {
    let hasItem1;
    if (guild != null) {
      const features2 = guild.features;
      hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
    }
    tmp4 = !hasItem1;
  }
  const isManualApprovalGuild = !tmp4;
  const canCreateApplicationBypassInvites = isManualApprovalGuild && stateFromStores;
  return { canCreateApplicationBypassInvites, isManualApprovalGuild };
};
