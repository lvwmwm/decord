// Module ID: 10339
// Function ID: 79808
// Name: useReactionPermissions
// Dependencies: []
// Exports: default

// Module 10339 (useReactionPermissions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const Permissions = arg1(dependencyMap[5]).Permissions;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default function useReactionPermissions(guild_id) {
  const arg1 = guild_id;
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  const importDefault = guild_id;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = closure_6.canChatInGuild(guild_id);
    }
    return canChatInGuildResult;
  }, items1);
  const dependencyMap = stateFromStores;
  const items2 = [closure_4];
  const items3 = [guild_id];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items2, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(guild_id);
    }
    return isLurkingResult;
  }, items3);
  const obj2 = arg1(dependencyMap[6]);
  const items4 = [closure_5];
  const items5 = [guild_id];
  const stateFromStores2 = arg1(dependencyMap[6]).useStateFromStores(items4, () => {
    let isCurrentUserGuestResult = null != guild_id;
    if (isCurrentUserGuestResult) {
      isCurrentUserGuestResult = currentUserGuest.isCurrentUserGuest(guild_id);
    }
    return isCurrentUserGuestResult;
  }, items5);
  const obj3 = arg1(dependencyMap[6]);
  const items6 = [closure_7];
  const items7 = [stateFromStores, guild_id];
  const stateFromStores3 = arg1(dependencyMap[6]).useStateFromStores(items6, () => {
    let canResult = stateFromStores;
    if (stateFromStores) {
      canResult = closure_7.can(constants.ADD_REACTIONS, arg0);
    }
    return canResult;
  }, items7);
  const obj4 = arg1(dependencyMap[6]);
  const currentUserAutomodQuaratinedProfile = arg1(dependencyMap[7]).useCurrentUserAutomodQuaratinedProfile(guild_id);
  const obj5 = arg1(dependencyMap[7]);
  arg1(dependencyMap[9]);
  if (null == guild_id) {
    obj = { -785821439: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000230329911188219, 1582421089: -172403270113748460000000, -2070461801: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039776031867697785, -1350565884: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000729112201225582, -1588264956: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122019556398, -1970739056: 0 };
  } else {
    obj = {};
    obj = { channel: guild_id, canChat: stateFromStores, renderReactions: true, canAddNewReactions: stateFromStores3, isLurking: stateFromStores1, communicationDisabled: callback(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1], isActiveChannelOrUnarchivableThread: tmp8, isAutomodQuarantined: currentUserAutomodQuaratinedProfile };
    const merged = Object.assign(importDefault(dependencyMap[10])(obj));
    obj["isLurking"] = stateFromStores1;
    obj["isGuest"] = stateFromStores2;
    obj["isPendingMember"] = false;
  }
  return obj;
};
