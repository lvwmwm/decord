// Module ID: 10856
// Function ID: 10857
// Name: useReactionPermissions
// Dependencies: [32, 4470, 2108, 5725, 4469, 1074, 504, 4475, 7419, 6687, 10857, 2]
// Exports: default

// Module 10856 (useReactionPermissions)
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5725 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default function useReactionPermissions(guild_id) {
  let obj7;
  let stateFromStores;
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildVerificationStore];
  const items1 = [guild_id];
  const obj = require("get initialized");
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => {
    const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(tmp);
    return canChatInGuildResult;
  }, items1);
  const items2 = [LurkingStore];
  const items3 = [guild_id];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  }, items3);
  const items4 = [GuildMemberStore];
  const items5 = [guild_id];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
    return isCurrentUserGuestResult;
  }, items5);
  const items6 = [PermissionStore];
  const items7 = [stateFromStores, guild_id];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items6, () => {
    const canResult = stateFromStores && PermissionStore.can(Permissions.ADD_REACTIONS, guild_id);
    return canResult;
  }, items7);
  const obj5 = require("AutomodPermissionUtils");
  const currentUserAutomodQuaratinedProfile = obj5.useCurrentUserAutomodQuaratinedProfile(guild_id);
  const obj6 = require("useUserCommunicationDisabled");
  const tmp8 = _slicedToArray(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
  require("ThreadHooks");
  if (null == guild_id) {
    obj7 = { disableReactionReads: true, disableReactionCreates: true, disableReactionUpdates: true, isLurking: false, isGuest: false, isPendingMember: false };
  } else {
    obj7 = { isLurking: stateFromStores1, isGuest: stateFromStores2, isPendingMember: false };
    const obj8 = { channel: guild_id, canChat: stateFromStores, renderReactions: true, canAddNewReactions: stateFromStores3, isLurking: stateFromStores1, communicationDisabled: tmp8, isActiveChannelOrUnarchivableThread: tmp10, isAutomodQuarantined: currentUserAutomodQuaratinedProfile };
    const merged = Object.assign(guild_id(tmp2[10])(obj8));
  }
  return obj7;
};
