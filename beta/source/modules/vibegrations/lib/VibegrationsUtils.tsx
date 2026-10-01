// Module ID: 5370
// Function ID: 5371
// Name: VibegrationsUtils
// Dependencies: [4467, 2067, 4469, 4655, 1074, 5371, 5372, 504, 2]
// Exports: canAccessVibegrations, canStartVibegrationsProject, eligibleVibegrationsGuilds, findVibegrationChannelId, getVibegrationsProjectAccessSettings, isVibegrationsChannelCandidate, isVibegrationsGuildEligible, isVibegrationsProjectInGuild, resolveVibegrationsWorkspaceGuildId, useCanAccessVibegrations, useIsVibegrationsChannelCandidate, vibegrationsSettingChannels, vibegrationsSettingsGuildId, vibegrationsTopicForApp

// Module 5370 (VibegrationsUtils)
import VibegrationsTypes from "VibegrationsTypes" /* 5371 */;
import VibegrationsGuildExperiment from "VibegrationsGuildExperiment" /* 5372 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c2;
let c3;
let c9;
let metroImportAll;
const f80441 = (guildId) => {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guildId.id, location: _location };
  let result = obj.isVibegrationsGuildEnabled(obj2);
  if (result) {
    const features = guildId.features;
    result = !features.has(constants.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
const f80442 = (id, id2) => {
  let num = -1;
  if (id.id >= id2.id) {
    let num2 = 0;
    if (id.id > id2.id) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
};
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c11)) {
      const substr = topic.slice(28);
      let tmp4 = null;
      if (re12.test(substr)) {
        tmp4 = substr;
      }
      return tmp4;
    }
  }
  return null;
}
function vibegrationsTextChannelsIn(guildId) {
  const arr = GuildChannelStore.getChannels(guildId)[React2];
  return arr.filter((channel) => channel.channel.type === constants.GUILD_TEXT);
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c2, GUILD_VOCAL_CHANNELS_KEY: c3 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ Permissions: metroImportAll, ChannelTypes: c9, GuildFeatures: c10 } = Constants);
let c11 = "vibegrations_application_id=";
const re12 = /^\d{17,20}$/;
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export const vibegrationsSettingsGuildId = function vibegrationsSettingsGuildId(project, isPreview) {
  let tmp = null;
  if (null != project) {
    tmp = null;
    if ("user" !== project.install_scope) {
      let preview_guild_id = null;
      if (isPreview) {
        preview_guild_id = project.preview_guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = project.guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = null;
      }
      tmp = preview_guild_id;
    }
  }
  return tmp;
};
export const vibegrationsSettingChannels = function vibegrationsSettingChannels(stateFromStores1, channel_filter) {
  let items;
  let items2;
  if ("voice" === channel_filter) {
    items = [];
  } else {
    items = stateFromStores1[React2];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    items2 = [];
  } else {
    items2 = stateFromStores1[_false];
  }
  HermesBuiltin.arraySpread(items1, items2, tmp3);
  return items1.map((channel) => channel.channel);
};
export const getVibegrationsProjectAccessSettings = function getVibegrationsProjectAccessSettings(first1) {
  const obj = { isPublic: first1 & VibegrationsTypes.VibegrationsProjectFlags.PUBLIC, isShared: first1 & VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE };
  return obj;
};
export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c11 + arg0;
};
export const isVibegrationsProjectInGuild = function isVibegrationsProjectInGuild(guild_id, arg1) {
  let tmp = null != guild_id;
  if (tmp) {
    let tmp3 = guild_id.guild_id === arg1 || guild_id.preview_guild_id === arg1;
    if (!tmp3) {
      tmp3 = null == guild_id.guild_id && null == guild_id.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
};
export { vibegrationsTextChannelsIn };
export const findVibegrationChannelId = function findVibegrationChannelId(guildId, applicationId) {
  const tmp = vibegrationsTextChannelsIn(guildId);
  for (const item10009 of tmp) {
    let channel = item10009.channel;
    if (vibegrationsAppIdFromTopic(channel.topic) === applicationId) {
      let id = channel.id;
      obj.return();
      return id;
    }
  }
  return null;
};
export const isVibegrationsGuildEligible = function isVibegrationsGuildEligible(guildId, VibegrationsRemixSheet) {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guildId.id, location: VibegrationsRemixSheet };
  let result = obj.isVibegrationsGuildEnabled(obj2);
  if (result) {
    const features = guildId.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const eligibleVibegrationsGuilds = function eligibleVibegrationsGuilds(guildsArray, useIsOwnedVibegrationsApplication) {
  let closure_0 = useIsOwnedVibegrationsApplication;
  const found = guildsArray.filter(f80441);
  return found.sort(f80442);
};
export const resolveVibegrationsWorkspaceGuildId = function resolveVibegrationsWorkspaceGuildId(VibegrationsCustomWidgetSheet) {
  let _location;
  let id;
  const guildId = SelectedGuildStore.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  if (null != guild) {
    let obj = require("VibegrationsGuildExperiment");
    let obj2 = { guildId: guild.id, location: VibegrationsCustomWidgetSheet };
    let result = obj.isVibegrationsGuildEnabled(obj2);
    if (result) {
      let features = guild.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    if (result) {
      id = guild.id;
    }
    return id;
  }
  const guildsArray = GuildStore.getGuildsArray();
  _require = VibegrationsCustomWidgetSheet;
  const found = guildsArray.filter(f80441);
  id = undefined;
  const first = found.sort(f80442)[0];
  if (first != null) {
    id = first.id;
  }
  if (id == null) {
    id = null;
  }
};
export const canAccessVibegrations = function canAccessVibegrations(guild, getChannelIdForGuildTransition) {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guild.id, location: getChannelIdForGuildTransition };
  let result = obj.isVibegrationsGuildEnabled(obj2);
  if (result) {
    const features = guild.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const canStartVibegrationsProject = function canStartVibegrationsProject(features, location) {
  features = features.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  let canResult = !hasItem && PermissionStore.can(metroImportAll.MANAGE_CHANNELS, features) && PermissionStore.can(metroImportAll.MANAGE_GUILD, features);
  if (canResult) {
    const obj2 = { guildId: features.id, location };
    const obj = VibegrationsGuildExperiment;
    canResult = obj.isVibegrationsGuildEnabled(obj2);
  }
  return canResult;
};
export const useCanAccessVibegrations = function useCanAccessVibegrations(guildId, useGuildActionRows) {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = obj.useIsVibegrationsGuildEnabled(obj2);
  const features = guildId.features;
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return isVibegrationsGuildEnabled;
};
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
  let guild_id;
  const getGuild = GuildStore.getGuild;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = getGuild(guild_id);
  let result = null != channel && channel.type === constants2.GUILD_TEXT;
  if (result) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c11)) {
        const substr = topic.slice(28);
        let tmp10 = null;
        if (re12.test(substr)) {
          tmp10 = substr;
        }
        tmp6 = tmp10;
      }
    }
    result = null != tmp6;
  }
  if (result) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    result = !hasItem;
  }
  if (result) {
    let guild_id1;
    const isVibegrationsGuildEnabled = VibegrationsGuildExperiment.isVibegrationsGuildEnabled;
    VibegrationsGuildExperiment;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    const obj = { guildId: guild_id1, location: ActivitySounds };
    result = isVibegrationsGuildEnabled(obj);
  }
  return result;
};
export const useIsVibegrationsChannelCandidate = function useIsVibegrationsChannelCandidate(channel, ChannelActions) {
  _require = channel;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return getGuild(guild_id);
  });
  let guild_id;
  const useIsVibegrationsGuildEnabled = require("VibegrationsGuildExperiment").useIsVibegrationsGuildEnabled;
  require("VibegrationsGuildExperiment");
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp5 = null != channel;
  const obj2 = { guildId: guild_id, location: ChannelActions };
  const isVibegrationsGuildEnabled = useIsVibegrationsGuildEnabled(obj2);
  if (tmp5) {
    tmp5 = channel.type === constants2.GUILD_TEXT;
  }
  if (tmp5) {
    const topic = channel.topic;
    let tmp7 = null;
    if (null != topic) {
      tmp7 = null;
      if (topic.startsWith(c11)) {
        const substr = topic.slice(28);
        let tmp11 = null;
        if (regex.test(substr)) {
          tmp11 = substr;
        }
        tmp7 = tmp11;
      }
    }
    tmp5 = null != tmp7;
  }
  if (tmp5) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp5 = !hasItem;
  }
  if (tmp5) {
    tmp5 = isVibegrationsGuildEnabled;
  }
  return tmp5;
};
