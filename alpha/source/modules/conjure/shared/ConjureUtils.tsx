// Module ID: 7413
// Function ID: 7414
// Name: ConjureUtils
// Dependencies: [2040, 4939, 4880, 4941, 5040, 1072, 6839, 6873, 7414, 2]
// Exports: canAccessConjure, canStartConjureProject, conjureSettingChannels, conjureSettingsGuildId, eligibleConjureGuilds, findConjureChannelId, getConjureProjectAccessSettings, hasEligibleConjureGuild, isConjureChannelCandidate, isConjureGuildEligible, isConjureProjectInGuild, resolveConjureWorkspaceGuildId, useCanAccessConjure, useIsConjureChannelCandidate

// Module 7413 (ConjureUtils)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6873 */;
import useAppChannelApplication from "useAppChannelApplication" /* 7414 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4939 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ChannelTypes;
let c3;
let c9;
let closure_4;
const f90337 = (guildId) => {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location: _location };
  return obj.isConjureGuildEnabled(obj2);
};
const f90338 = (id, id2) => {
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
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureUtils.tsx");

export function conjureSettingsGuildId(project, arg1) {
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
}
export function conjureSettingChannels(channels, channel_filter) {
  let items;
  let items2;
  if ("voice" === channel_filter) {
    items = [];
  } else {
    items = channels[_false];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    items2 = [];
  } else {
    items2 = channels[React3];
  }
  HermesBuiltin.arraySpread(items1, items2, tmp3);
  const mapped = items1.map((channel) => channel.channel);
  return mapped.filter((type) => !set.has(type.type));
}
export function getConjureProjectAccessSettings(arg0) {
  const obj = { isPublic: arg0 & ConjureProjectTypes.ConjureProjectFlags.PUBLIC, isGuildCollaboration: arg0 & ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION };
  return obj;
}
export { conjureChannelAppId };
export function isConjureProjectInGuild(item10020, arg1) {
  let tmp = null != item10020;
  if (tmp) {
    let tmp3 = item10020.guild_id === arg1 || item10020.preview_guild_id === arg1;
    if (!tmp3) {
      tmp3 = null == item10020.guild_id && null == item10020.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
}
export function findConjureChannelId(guild_id, application_id) {
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
}
export function isConjureGuildEligible(guildId, ConjureRemixSheet) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location: ConjureRemixSheet };
  return obj.isConjureGuildEnabled(obj2);
}
export function eligibleConjureGuilds(arr, arg1) {
  let closure_0 = arg1;
  const found = arr.filter(f90337);
  return found.sort(f90338);
}
export function hasEligibleConjureGuild(guildsArray, useIsOwnedConjureApplication) {
  const _location = useIsOwnedConjureApplication;
  return guildsArray.some((guildId) => {
    const obj = ConjureGuildExperiment;
    const obj2 = { guildId: guildId.id, location: _location };
    return obj.isConjureGuildEnabled(obj2);
  });
}
export function resolveConjureWorkspaceGuildId(ConjureChatStore) {
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
  const found = guildsArray.filter(f90337);
  id = undefined;
  const first = found.sort(f90338)[0];
  if (first != null) {
    id = first.id;
  }
  if (id == null) {
    id = null;
  }
}
export function canAccessConjure(guild, getChannelIdForGuildTransition) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guild.id, location: getChannelIdForGuildTransition };
  return obj.isConjureGuildEnabled(obj2);
}
export function canStartConjureProject(id, location) {
  let result = PermissionStore.can(constants.MANAGE_CHANNELS, id) && PermissionStore.can(constants.MANAGE_GUILD, id);
  if (result) {
    const obj3 = { guildId: id.id, location };
    const obj2 = ConjureGuildExperiment;
    result = obj2.isConjureGuildEnabled(obj3);
  }
  return result;
}
export function useCanAccessConjure(guildId, useGuildActionRows) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location: useGuildActionRows };
  return obj.useIsConjureGuildEnabled(obj2);
}
export function isConjureChannelCandidate(channel, ActivitySounds) {
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
}
export function useIsConjureChannelCandidate(channel, AppChannel) {
  const obj = useAppChannelApplication;
  const appChannelApplication = obj.useAppChannelApplication(channel);
  let guild_id;
  const useIsConjureGuildEnabled = ConjureGuildExperiment.useIsConjureGuildEnabled;
  ConjureGuildExperiment;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let type;
  const obj2 = { guildId: guild_id, location: AppChannel };
  const isConjureGuildEnabled = useIsConjureGuildEnabled(obj2);
  if (channel != null) {
    type = channel.type;
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
}
