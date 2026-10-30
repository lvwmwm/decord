// Module ID: 7432
// Function ID: 7433
// Name: canReviewGuildMemberApplications
// Dependencies: [4880, 4941, 1072, 504, 6962, 2]
// Exports: canReviewGuildMemberApplications, useCanReviewGuildMemberApplications

// Module 7432 (canReviewGuildMemberApplications)
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export function canReviewGuildMemberApplications(c0) {
  const guild = GuildStore.getGuild(c0);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    const hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL) && PermissionStore.can(hasOwnProperty.KICK_MEMBERS, guild);
    tmp2 = hasItem;
  }
  return tmp2;
}
export function useCanReviewGuildMemberApplications(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let hasItem = null != stateFromStores;
  const tmp = _require;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = PermissionStore.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    const tmpResult = tmp(6962);
    hasItem = tmpResult.guildHasVerificationGate(stateFromStores);
  }
  return hasItem;
}
