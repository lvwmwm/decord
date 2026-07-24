// Module ID: 5629
// Function ID: 48041
// Name: vibegrationsAppIdFromTopic
// Dependencies: [1838, 3758, 653, 5630, 566, 2]
// Exports: canManageVibegrations, isVibegrationsChannelCandidate, useCanManageVibegrations, useIsVibegrationsChannelCandidate, vibegrationsTopicForApp

// Module 5629 (vibegrationsAppIdFromTopic)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c7)) {
      const substr = topic.slice(28);
      let tmp4 = null;
      if (regex.test(substr)) {
        tmp4 = substr;
      }
      return tmp4;
    }
  }
  return null;
}
function isVibegrationsChannelCandidateInternal(type, stateFromStores) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants2.GUILD_TEXT;
  }
  if (tmp) {
    tmp = null != vibegrationsAppIdFromTopic(type.topic);
  }
  if (tmp) {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp = !hasItem;
  }
  return tmp;
}
({ Permissions: closure_4, ChannelTypes: closure_5, GuildFeatures: closure_6 } = ME);
let c7 = "vibegrations_application_id=";
const re8 = /^\d{17,20}$/;
let result = require("ME").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c7 + arg0;
};
export const canManageVibegrations = function canManageVibegrations(guild, isAccessibleChannelOrThreadPath) {
  let obj = require(5630) /* useIsVibegrationsGuildEnabled */;
  obj = { guildId: guild.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    result = _isNativeReflectConstruct.can(constants.MANAGE_CHANNELS, guild);
  }
  if (result) {
    result = _isNativeReflectConstruct.can(constants.MANAGE_GUILD, guild);
  }
  if (result) {
    const features = guild.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const useCanManageVibegrations = function useCanManageVibegrations(guildId, useGuildActionRows) {
  const _require = guildId;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let canResult = outer1_3.can(outer1_4.MANAGE_CHANNELS, closure_0);
    if (canResult) {
      canResult = outer1_3.can(outer1_4.MANAGE_GUILD, closure_0);
    }
    return canResult;
  }, items1);
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = _require(5630).useIsVibegrationsGuildEnabled(obj);
  const features = guildId.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = stateFromStores;
  }
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = !hasItem;
  }
  return isVibegrationsGuildEnabled;
};
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let result = isVibegrationsChannelCandidateInternal(channel, guild.getGuild(guild_id));
  if (result) {
    let obj = require(5630) /* useIsVibegrationsGuildEnabled */;
    obj = {};
    let guild_id1;
    if (null != channel) {
      guild_id1 = channel.guild_id;
    }
    obj.guildId = guild_id1;
    obj.location = ActivitySounds;
    result = obj.isVibegrationsGuildEnabled(obj);
  }
  return result;
};
export const useIsVibegrationsChannelCandidate = function useIsVibegrationsChannelCandidate(guild_id, location) {
  const _require = guild_id;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (null != guild_id) {
      guild_id = guild_id.guild_id;
    }
    return outer1_2.getGuild(guild_id);
  });
  obj = {};
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  obj.guildId = guild_id;
  obj.location = location;
  const isVibegrationsGuildEnabled = _require(5630).useIsVibegrationsGuildEnabled(obj);
  const obj2 = _require(5630);
  return isVibegrationsChannelCandidateInternal(guild_id, stateFromStores) && isVibegrationsGuildEnabled;
};
