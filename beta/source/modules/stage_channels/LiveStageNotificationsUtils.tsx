// Module ID: 9269
// Function ID: 9270
// Name: LiveStageNotificationsUtils
// Dependencies: [4754, 4469, 1085, 504, 2]
// Exports: useCanSendStageStartNotification, useDefaultSendStartStageNotificationToggle

// Module 9269 (LiveStageNotificationsUtils)
import Constants from "Constants" /* 1085 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = function useCanSendStageStartNotification(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canResult = null != closure_0 && PermissionStore.can(Permissions.MENTION_EVERYONE, tmp);
    return canResult;
  }, items1);
};
export const useDefaultSendStartStageNotificationToggle = function useDefaultSendStartStageNotificationToggle(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildMemberCountStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild_id), items1);
  let tmp3 = null == guild_id;
  if (!tmp3) {
    tmp3 = !(null == stateFromStores || stateFromStores > 50000);
    const tmp4 = null == stateFromStores || stateFromStores > 50000;
  }
  return tmp3;
};
