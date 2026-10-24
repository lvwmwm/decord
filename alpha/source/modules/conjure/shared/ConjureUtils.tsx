// Module ID: 7345
// Function ID: 7346
// Name: ConjureUtils
// Dependencies: [2045, 4901, 4845, 4903, 5002, 1087, 6774, 6808, 558, 576, 7346, 2]
// Exports: canAccessConjure, canStartConjureProject, conjureSettingChannels, conjureSettingsGuildId, eligibleConjureGuilds, findConjureChannelId, getConjureProjectAccessSettings, hasEligibleConjureGuild, isConjureChannelCandidate, isConjureGuildEligible, isConjureProjectInGuild, resolveConjureWorkspaceGuildId

// Module 7345 (ConjureUtils)
import react from "react" /* 576 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6808 */;
import useAppChannelApplication from "useAppChannelApplication" /* 7346 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4901 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ChannelTypes;
let c3;
let c9;
let closure_4;
const f98202 = (guildId) => {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location: _location };
  return obj.isConjureGuildEnabled(obj2);
};
const f98203 = (id, id2) => {
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
function conjureChannelAppId(channel) {
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp2 = null;
  if (type === ChannelTypes.GUILD_APP) {
    let application_id = channel.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp2 = application_id;
  }
  return tmp2;
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ Permissions: c9, ChannelTypes } = Constants);
let items = [, ];
({ GUILD_DIRECTORY: arr[0], GUILD_STORE: arr[1] } = ChannelTypes);
const set = new Set(items);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanAccessConjure(guildId, location) {
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === guildId.id) {
    let tmp4;
    if (cResult[1] === location) {
      tmp4 = cResult[2];
    }
    const tmpResult = ConjureGuildExperiment;
    return tmpResult.useIsConjureGuildEnabled(tmp4);
  }
  const obj2 = { guildId: guildId.id, location };
  cResult[0] = guildId.id;
  cResult[1] = location;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (function useCanAccessConjure(guildId, location) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location };
  return obj.useIsConjureGuildEnabled(obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureChannelCandidate(guild_id, location) {
  const obj = react;
  const cResult = obj.c(7);
  const obj2 = useAppChannelApplication;
  const appChannelApplication = obj2.useAppChannelApplication(guild_id);
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[0] === location) {
    let tmp6;
    if (cResult[1] === guild_id) {
      tmp6 = cResult[2];
    }
    const tmpResult = ConjureGuildExperiment;
    const isConjureGuildEnabled = tmpResult.useIsConjureGuildEnabled(tmp6);
    if (cResult[3] === appChannelApplication) {
      if (cResult[4] === guild_id) {
        let tmp8;
        if (cResult[5] === isConjureGuildEnabled) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    let type;
    if (guild_id != null) {
      type = guild_id.type;
    }
    let tmp11 = type === ChannelTypes.GUILD_APP;
    if (tmp11) {
      let conjureProjectId;
      if (appChannelApplication != null) {
        conjureProjectId = appChannelApplication.conjureProjectId;
      }
      tmp11 = null != conjureProjectId;
    }
    if (tmp11) {
      tmp11 = isConjureGuildEnabled;
    }
    cResult[3] = appChannelApplication;
    cResult[4] = guild_id;
    cResult[5] = isConjureGuildEnabled;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  const obj3 = { guildId: guild_id, location };
  cResult[0] = location;
  cResult[1] = guild_id;
  cResult[2] = obj3;
  tmp6 = obj3;
}) : (function useIsConjureChannelCandidate(guild_id, location) {
  const obj = useAppChannelApplication;
  const appChannelApplication = obj.useAppChannelApplication(guild_id);
  guild_id = undefined;
  const useIsConjureGuildEnabled = ConjureGuildExperiment.useIsConjureGuildEnabled;
  ConjureGuildExperiment;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let type;
  const obj2 = { guildId: guild_id, location };
  const isConjureGuildEnabled = useIsConjureGuildEnabled(obj2);
  if (guild_id != null) {
    type = guild_id.type;
  }
  let tmp6 = type === ChannelTypes.GUILD_APP;
  if (tmp6) {
    let conjureProjectId;
    if (appChannelApplication != null) {
      conjureProjectId = appChannelApplication.conjureProjectId;
    }
    tmp6 = null != conjureProjectId;
  }
  if (tmp6) {
    tmp6 = isConjureGuildEnabled;
  }
  return tmp6;
});
function isConjureGuildEligible(guildId, ConjureRemixSheet) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location: ConjureRemixSheet };
  return obj.isConjureGuildEnabled(obj2);
}
function eligibleConjureGuilds(arr, arg1) {
  let closure_0 = arg1;
  const found = arr.filter(f98202);
  return found.sort(f98203);
}
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureUtils.tsx");

export const conjureSettingsGuildId = function conjureSettingsGuildId(project, arg1) {
  let tmp = null;
  if (null != project) {
    tmp = null;
    if ("user" !== project.install_scope) {
      let preview_guild_id = null;
      if (arg1) {
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
export const conjureSettingChannels = function conjureSettingChannels(stateFromStores, channel_filter) {
  let items;
  let items2;
  if ("voice" === channel_filter) {
    items = [];
  } else {
    items = stateFromStores[_false];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    items2 = [];
  } else {
    items2 = stateFromStores[React3];
  }
  HermesBuiltin.arraySpread(items1, items2, tmp3);
  const mapped = items1.map((channel) => channel.channel);
  return mapped.filter((type) => !set.has(type.type));
};
export const getConjureProjectAccessSettings = function getConjureProjectAccessSettings(arg0) {
  const obj = { isPublic: arg0 & ConjureProjectTypes.ConjureProjectFlags.PUBLIC, isGuildCollaboration: arg0 & ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION };
  return obj;
};
export { conjureChannelAppId };
export const isConjureProjectInGuild = function isConjureProjectInGuild(item10020, guildId) {
  let tmp = null != item10020;
  if (tmp) {
    let tmp3 = item10020.guild_id === guildId || item10020.preview_guild_id === guildId;
    if (!tmp3) {
      tmp3 = null == item10020.guild_id && null == item10020.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const findConjureChannelId = function findConjureChannelId(guild_id, application_id) {
  const tmp = GuildChannelStore.getChannels(guild_id)[_false];
  for (const item10012 of tmp) {
    let channel = item10012.channel;
    if (conjureChannelAppId(channel) === application_id) {
      let id = channel.id;
      obj.return();
      return id;
    }
  }
  return null;
};
export { isConjureGuildEligible };
export { eligibleConjureGuilds };
export const hasEligibleConjureGuild = function hasEligibleConjureGuild(guildsArray, useIsOwnedConjureApplication_str) {
  const _location = useIsOwnedConjureApplication_str;
  return guildsArray.some((guildId) => {
    const obj = ConjureGuildExperiment;
    const obj2 = { guildId: guildId.id, location: _location };
    return obj.isConjureGuildEnabled(obj2);
  });
};
export const resolveConjureWorkspaceGuildId = function resolveConjureWorkspaceGuildId(ConjureChatStore) {
  let _location;
  let id;
  const guildId = SelectedGuildStore.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  if (null != guild) {
    let obj = require("ConjureGuildExperiment");
    let obj2 = { guildId: guild.id, location: ConjureChatStore };
    if (obj.isConjureGuildEnabled(obj2)) {
      id = guild.id;
    }
    return id;
  }
  const guildsArray = GuildStore.getGuildsArray();
  _require = ConjureChatStore;
  const found = guildsArray.filter(f98202);
  id = undefined;
  const first = found.sort(f98203)[0];
  if (first != null) {
    id = first.id;
  }
  if (id == null) {
    id = null;
  }
};
export const canAccessConjure = function canAccessConjure(guild, getChannelIdForGuildTransition) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guild.id, location: getChannelIdForGuildTransition };
  return obj.isConjureGuildEnabled(obj2);
};
export const canStartConjureProject = function canStartConjureProject(id, location) {
  let result = PermissionStore.can(constants.MANAGE_CHANNELS, id) && PermissionStore.can(constants.MANAGE_GUILD, id);
  if (result) {
    const obj3 = { guildId: id.id, location };
    const obj2 = ConjureGuildExperiment;
    result = obj2.isConjureGuildEnabled(obj3);
  }
  return result;
};
export const useCanAccessConjure = tmp5;
export const isConjureChannelCandidate = function isConjureChannelCandidate(channel, ActivitySounds) {
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp3 = null;
  const tmp2 = ChannelTypes;
  if (type === ChannelTypes.GUILD_APP) {
    let application_id = channel.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp3 = application_id;
  }
  let application = null;
  if (null != tmp3) {
    application = null;
    const obj = ApplicationStore;
    if (ApplicationStore.isHydrated(tmp3)) {
      application = obj.getApplication(tmp3);
    }
  }
  let type1;
  if (channel != null) {
    type1 = channel.type;
  }
  let result = type1 === tmp2.GUILD_APP;
  if (result) {
    let conjureProjectId;
    if (application != null) {
      conjureProjectId = application.conjureProjectId;
    }
    result = null != conjureProjectId;
  }
  if (result) {
    let guild_id;
    const isConjureGuildEnabled = ConjureGuildExperiment.isConjureGuildEnabled;
    ConjureGuildExperiment;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const obj2 = { guildId: guild_id, location: ActivitySounds };
    result = isConjureGuildEnabled(obj2);
  }
  return result;
};
export const useIsConjureChannelCandidate = tmp6;
