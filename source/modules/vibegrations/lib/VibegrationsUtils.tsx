// Module ID: 5664
// Function ID: 48174
// Name: vibegrationsAppIdFromTopic
// Dependencies: [5, 4202, 1838, 3793, 5665, 653, 5666, 566, 5667, 12591, 2]
// Exports: canManageVibegrations, isVibegrationsChannelCandidate, publishPreviewAndReauthorizeIfPermissionsChanged, useCanManageVibegrations, useIsVibegrationsChannelCandidate, vibegrationsTopicForApp

// Module 5664 (vibegrationsAppIdFromTopic)
import closure_3 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c11)) {
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
async function _publishPreviewAndReauthorizeIfPermissionsChanged(arg0, arg1) {
  const project = outer2_7.getProject(arg0);
  if (null != project) {
    const preview_guild_id = project.preview_guild_id;
  }
  let obj = outer2_0(outer2_2[8]);
  const tmp2 = yield obj.publishPreviewProject(arg0);
  if (tmp2.ok) {
    const body = tmp2.body;
    const preview_application_id = body.project.preview_application_id;
    if (null != preview_guild_id) {
      if (null != preview_application_id) {
        if (!body.integration_installed) {
          const application = outer2_4.getApplication(preview_application_id);
          if (null != application) {
            obj = { applicationId: tmp3.id, application, guildId: preview_guild_id };
            yield outer2_1(outer2_2[9]).openVibegrationsAppInstallModal(obj);
            const obj2 = outer2_1(outer2_2[9]);
          }
        }
      }
    }
  }
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
({ Permissions: closure_8, ChannelTypes: closure_9, GuildFeatures: closure_10 } = ME);
let c11 = "vibegrations_application_id=";
const re12 = /^\d{17,20}$/;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c11 + arg0;
};
export const canManageVibegrations = function canManageVibegrations(guild, isAccessibleChannelOrThreadPath) {
  let obj = require(5666) /* useIsVibegrationsGuildEnabled */;
  obj = { guildId: guild.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    result = closure_6.can(constants.MANAGE_CHANNELS, guild);
  }
  if (result) {
    result = closure_6.can(constants.MANAGE_GUILD, guild);
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
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let canResult = outer1_6.can(outer1_8.MANAGE_CHANNELS, closure_0);
    if (canResult) {
      canResult = outer1_6.can(outer1_8.MANAGE_GUILD, closure_0);
    }
    return canResult;
  }, items1);
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = _require(5666).useIsVibegrationsGuildEnabled(obj);
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
export const publishPreviewAndReauthorizeIfPermissionsChanged = function publishPreviewAndReauthorizeIfPermissionsChanged() {
  return _publishPreviewAndReauthorizeIfPermissionsChanged(...arguments);
};
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let result = isVibegrationsChannelCandidateInternal(channel, guild.getGuild(guild_id));
  if (result) {
    let obj = require(5666) /* useIsVibegrationsGuildEnabled */;
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
    return outer1_5.getGuild(guild_id);
  });
  obj = {};
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  obj.guildId = guild_id;
  obj.location = location;
  const isVibegrationsGuildEnabled = _require(5666).useIsVibegrationsGuildEnabled(obj);
  const obj2 = _require(5666);
  return isVibegrationsChannelCandidateInternal(guild_id, stateFromStores) && isVibegrationsGuildEnabled;
};
