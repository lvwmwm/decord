// Module ID: 5371
// Function ID: 5372
// Name: VibegrationsUtils
// Dependencies: [4470, 2073, 4472, 4657, 1086, 5372, 5373, 558, 576, 504, 2]
// Exports: canAccessVibegrations, canStartVibegrationsProject, eligibleVibegrationsGuilds, findVibegrationChannelId, getVibegrationsProjectAccessSettings, isVibegrationsChannelCandidate, isVibegrationsGuildEligible, isVibegrationsProjectInGuild, resolveVibegrationsWorkspaceGuildId, vibegrationsSettingChannels, vibegrationsSettingsGuildId, vibegrationsTopicForApp

// Module 5371 (VibegrationsUtils)
import react from "react" /* 576 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5372 */;
import VibegrationsGuildExperiment from "VibegrationsGuildExperiment" /* 5373 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4470 */;
import GuildStore from "GuildStore" /* 2073 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c2;
let c3;
let c9;
let metroImportAll;
const f89499 = (guildId) => {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guildId.id, location: _location };
  let result = obj.isVibegrationsGuildEnabled(obj2);
  if (result) {
    const features = guildId.features;
    result = !features.has(constants.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
const f89500 = (id, id2) => {
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(5);
  if (cResult[0] === guildId.id) {
    let tmp4;
    let tmp6;
    if (cResult[1] === location) {
      tmp4 = cResult[2];
    }
    const tmpResult = VibegrationsGuildExperiment;
    let isVibegrationsGuildEnabled = tmpResult.useIsVibegrationsGuildEnabled(tmp4);
    if (cResult[3] !== guildId.features) {
      const features = guildId.features;
      const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
      cResult[3] = guildId.features;
      cResult[4] = hasItem;
      tmp6 = hasItem;
    } else {
      tmp6 = cResult[4];
    }
    if (isVibegrationsGuildEnabled) {
      isVibegrationsGuildEnabled = !tmp6;
    }
    return isVibegrationsGuildEnabled;
  }
  const obj2 = { guildId: guildId.id, location };
  cResult[0] = guildId.id;
  cResult[1] = location;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : ((guildId, location) => {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guildId.id, location };
  let isVibegrationsGuildEnabled = obj.useIsVibegrationsGuildEnabled(obj2);
  const features = guildId.features;
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return isVibegrationsGuildEnabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, location) => {
  let first;
  let tmp8;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  guild_id = undefined;
  const tmp6 = cResult[1];
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (tmp6 !== guild_id) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    const fn = function a() {
      guild_id = undefined;
      const getGuild = GuildStore.getGuild;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      return getGuild(guild_id);
    };
    cResult[1] = guild_id1;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  let guild_id2;
  if (guild_id != null) {
    guild_id2 = guild_id.guild_id;
  }
  if (cResult[3] === location) {
    let tmp12;
    if (cResult[4] === guild_id2) {
      tmp12 = cResult[5];
    }
    const tmpResult2 = require("VibegrationsGuildExperiment");
    const isVibegrationsGuildEnabled = tmpResult2.useIsVibegrationsGuildEnabled(tmp12);
    if (cResult[6] === guild_id) {
      if (cResult[7] === stateFromStores) {
        let tmp14;
        if (cResult[8] === isVibegrationsGuildEnabled) {
          tmp14 = cResult[9];
        }
        return tmp14;
      }
    }
    let tmp15 = null != guild_id && guild_id.type === constants2.GUILD_TEXT;
    if (tmp15) {
      const topic = guild_id.topic;
      let tmp17 = null;
      if (null != topic) {
        tmp17 = null;
        if (topic.startsWith(c11)) {
          const substr = topic.slice(28);
          let tmp21 = null;
          if (regex.test(substr)) {
            tmp21 = substr;
          }
          tmp17 = tmp21;
        }
      }
      tmp15 = null != tmp17;
    }
    if (tmp15) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
      }
      tmp15 = !hasItem;
    }
    if (tmp15) {
      tmp15 = isVibegrationsGuildEnabled;
    }
    cResult[6] = guild_id;
    cResult[7] = stateFromStores;
    cResult[8] = isVibegrationsGuildEnabled;
    cResult[9] = tmp15;
    tmp14 = tmp15;
  }
  const obj2 = { guildId: guild_id2, location };
  cResult[3] = location;
  cResult[4] = guild_id2;
  cResult[5] = obj2;
  tmp12 = obj2;
}) : ((guild_id, location) => {
  _require = guild_id;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    guild_id = undefined;
    const getGuild = GuildStore.getGuild;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return getGuild(guild_id);
  });
  guild_id = undefined;
  const useIsVibegrationsGuildEnabled = require("VibegrationsGuildExperiment").useIsVibegrationsGuildEnabled;
  require("VibegrationsGuildExperiment");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let tmp5 = null != guild_id;
  const obj2 = { guildId: guild_id, location };
  const isVibegrationsGuildEnabled = useIsVibegrationsGuildEnabled(obj2);
  if (tmp5) {
    tmp5 = guild_id.type === constants2.GUILD_TEXT;
  }
  if (tmp5) {
    const topic = guild_id.topic;
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
});
function isVibegrationsGuildEligible(guildId, VibegrationsRemixSheet) {
  const obj = VibegrationsGuildExperiment;
  const obj2 = { guildId: guildId.id, location: VibegrationsRemixSheet };
  let result = obj.isVibegrationsGuildEnabled(obj2);
  if (result) {
    const features = guildId.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
}
function eligibleVibegrationsGuilds(guildsArray, useIsOwnedVibegrationsApplication) {
  let closure_0 = useIsOwnedVibegrationsApplication;
  const found = guildsArray.filter(f89499);
  return found.sort(f89500);
}
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
export const isVibegrationsProjectInGuild = function isVibegrationsProjectInGuild(guild_id, guildId) {
  let tmp = null != guild_id;
  if (tmp) {
    let tmp3 = guild_id.guild_id === guildId || guild_id.preview_guild_id === guildId;
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
export { isVibegrationsGuildEligible };
export { eligibleVibegrationsGuilds };
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
  const found = guildsArray.filter(f89499);
  id = undefined;
  const first = found.sort(f89500)[0];
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
export const useCanAccessVibegrations = tmp4;
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
export const useIsVibegrationsChannelCandidate = tmp5;
