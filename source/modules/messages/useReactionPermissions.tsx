// Module ID: 10350
// Function ID: 79871
// Name: useReactionPermissions
// Dependencies: [57, 3759, 1917, 4946, 3758, 653, 566, 3764, 7664, 5650, 10351, 2]
// Exports: default

// Module 10350 (useReactionPermissions)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default function useReactionPermissions(guild_id) {
  const _require = guild_id;
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  let obj = _require(stateFromStores[6]);
  const items = [closure_6];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = outer1_6.canChatInGuild(guild_id);
    }
    return canChatInGuildResult;
  }, items1);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [guild_id];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items2, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = outer1_4.isLurking(guild_id);
    }
    return isLurkingResult;
  }, items3);
  const obj2 = _require(stateFromStores[6]);
  const items4 = [closure_5];
  const items5 = [guild_id];
  const stateFromStores2 = _require(stateFromStores[6]).useStateFromStores(items4, () => {
    let isCurrentUserGuestResult = null != guild_id;
    if (isCurrentUserGuestResult) {
      isCurrentUserGuestResult = outer1_5.isCurrentUserGuest(guild_id);
    }
    return isCurrentUserGuestResult;
  }, items5);
  const obj3 = _require(stateFromStores[6]);
  const items6 = [closure_7];
  const items7 = [stateFromStores, guild_id];
  const stateFromStores3 = _require(stateFromStores[6]).useStateFromStores(items6, () => {
    let canResult = stateFromStores;
    if (stateFromStores) {
      canResult = outer1_7.can(outer1_8.ADD_REACTIONS, closure_0);
    }
    return canResult;
  }, items7);
  const obj4 = _require(stateFromStores[6]);
  const currentUserAutomodQuaratinedProfile = _require(stateFromStores[7]).useCurrentUserAutomodQuaratinedProfile(guild_id);
  const obj5 = _require(stateFromStores[7]);
  _require(stateFromStores[9]);
  if (null == guild_id) {
    obj = { disableReactionReads: true, disableReactionCreates: true, disableReactionUpdates: true, isLurking: false, isGuest: false, isPendingMember: false };
  } else {
    obj = {};
    obj = { channel: guild_id, canChat: stateFromStores, renderReactions: true, canAddNewReactions: stateFromStores3, isLurking: stateFromStores1, communicationDisabled: callback(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1], isActiveChannelOrUnarchivableThread: tmp8, isAutomodQuarantined: currentUserAutomodQuaratinedProfile };
    const merged = Object.assign(guild_id(stateFromStores[10])(obj));
    obj["isLurking"] = stateFromStores1;
    obj["isGuest"] = stateFromStores2;
    obj["isPendingMember"] = false;
  }
  return obj;
};
