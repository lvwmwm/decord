// Module ID: 5629
// Function ID: 48046
// Name: vibegrationsAppIdFromTopic
// Dependencies: [5, 4168, 5630, 1838, 3759, 5653, 653, 5654, 566, 5655, 483, 5656, 5463, 5657, 12547, 2]
// Exports: canManageVibegrations, isVibegrationsChannelCandidate, publishPreviewAndReauthorizeIfPermissionsChanged, useCanManageVibegrations, useIsVibegrationsChannelCandidate, vibegrationsTopicForApp

// Module 5629 (vibegrationsAppIdFromTopic)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c13)) {
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
function getGuildInstallPermissions(integrationTypesConfig) {
  integrationTypesConfig = integrationTypesConfig.integrationTypesConfig;
  let oauth2InstallParams;
  if (null != integrationTypesConfig) {
    const tmp4 = integrationTypesConfig[require(undefined, 5655) /* ApplicationIntegrationType */.ApplicationIntegrationType.GUILD_INSTALL];
    if (null != tmp4) {
      oauth2InstallParams = tmp4.oauth2InstallParams;
    }
  }
  if (null == oauth2InstallParams) {
    oauth2InstallParams = integrationTypesConfig.installParams;
  }
  let permissions;
  if (null != oauth2InstallParams) {
    permissions = oauth2InstallParams.permissions;
  }
  if (null != permissions) {
    let EMPTY_FLAG = importAll(483).deserialize(oauth2InstallParams.permissions);
    const obj = importAll(483);
  } else {
    EMPTY_FLAG = importAll(483).EMPTY_FLAG;
  }
  return EMPTY_FLAG;
}
async function _isBotInstalledInGuild(arg0, arg1, arg2) {
  let closure_0 = arg1;
  yield outer2_0(outer2_3[11]).fetchProfile(arg0, { withMutualGuilds: true });
  const mutualGuilds = outer2_6.getMutualGuilds(arg0);
  let someResult;
  if (null != mutualGuilds) {
    someResult = mutualGuilds.some((guild) => guild.guild.id === closure_0);
  }
  let tmp6 = tmp5;
  if (null != someResult) {
    tmp6 = someResult;
  }
  return tmp6;
}
async function _publishPreviewAndReauthorizeIfPermissionsChanged(arg0, arg1) {
  const project = outer2_9.getProject(arg0);
  if (null != project) {
    const preview_guild_id = project.preview_guild_id;
  }
  let prop;
  if (null != project) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = prop;
  }
  let EMPTY_FLAG = null;
  if (null != tmp3) {
    if (null == outer2_5.getApplication(tmp4)) {
      let obj = outer2_1(outer2_3[12]);
      yield obj.fetchApplication(tmp4);
    }
    while (true) {
      let tmp14 = outer2_5;
      let application = outer2_5.getApplication(tmp3);
      EMPTY_FLAG = null;
      if (null == application) {
        break;
      } else {
        let tmp16 = outer2_16;
        EMPTY_FLAG = outer2_16(application);
        break;
      }
      break;
    }
  }
  const tmp17 = yield outer2_0(outer2_3[13]).publishPreviewProject(arg0);
  if (tmp17.ok) {
    const preview_application_id = tmp17.body.preview_application_id;
    if (null != preview_guild_id) {
      if (null != preview_application_id) {
        const application1 = outer2_5.getApplication(preview_application_id);
        if (null != application1) {
          if (null == EMPTY_FLAG) {
            EMPTY_FLAG = outer2_2(outer2_3[10]).EMPTY_FLAG;
          }
          const obj5 = outer2_2(outer2_3[10]);
          const tmp22 = yield (function isBotInstalledInGuild(preview_application_id, preview_guild_id) {
            return outer3_17(...arguments);
          })(preview_application_id, preview_guild_id);
          let tmp23 = tmp22;
          if (tmp22) {
            tmp23 = equalsResult;
          }
          if (!tmp23) {
            obj = { applicationId: preview_application_id, application: application1, guildId: preview_guild_id };
            return yield outer2_1(outer2_3[14]).openVibegrationsAppInstallModal(obj);
          }
          equalsResult = outer2_2(outer2_3[10]).equals(EMPTY_FLAG, outer2_16(application1));
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
({ Permissions: closure_10, ChannelTypes: closure_11, GuildFeatures: closure_12 } = ME);
let c13 = "vibegrations_application_id=";
const re14 = /^\d{17,20}$/;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c13 + arg0;
};
export const canManageVibegrations = function canManageVibegrations(guild, isAccessibleChannelOrThreadPath) {
  let obj = require(5654) /* useIsVibegrationsGuildEnabled */;
  obj = { guildId: guild.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    result = closure_8.can(constants.MANAGE_CHANNELS, guild);
  }
  if (result) {
    result = closure_8.can(constants.MANAGE_GUILD, guild);
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
  const items = [closure_8];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let canResult = outer1_8.can(outer1_10.MANAGE_CHANNELS, closure_0);
    if (canResult) {
      canResult = outer1_8.can(outer1_10.MANAGE_GUILD, closure_0);
    }
    return canResult;
  }, items1);
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = _require(5654).useIsVibegrationsGuildEnabled(obj);
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
    let obj = require(5654) /* useIsVibegrationsGuildEnabled */;
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
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (null != guild_id) {
      guild_id = guild_id.guild_id;
    }
    return outer1_7.getGuild(guild_id);
  });
  obj = {};
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  obj.guildId = guild_id;
  obj.location = location;
  const isVibegrationsGuildEnabled = _require(5654).useIsVibegrationsGuildEnabled(obj);
  const obj2 = _require(5654);
  return isVibegrationsChannelCandidateInternal(guild_id, stateFromStores) && isVibegrationsGuildEnabled;
};
