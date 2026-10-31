// Module ID: 18891
// Function ID: 18892
// Name: useVoiceChannelApp
// Dependencies: [4885, 4946, 1072, 504, 6879, 2]
// Exports: useCanConfigureVoiceChannelApp, useIsVoiceChannelAppEnabled, useVoiceChannelApplicationId

// Module 18891 (useVoiceChannelApp)
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, getGuild;

let closure_4;
let hasOwnProperty;
let metroRequire;
const f116043 = () => {
  guild_id = undefined;
  getGuild = getGuild.getGuild;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  return getGuild(guild_id);
};
({ ChannelTypes: closure_4, GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelApp.tsx");

export function useIsVoiceChannelAppEnabled(guild_id) {
  _require = guild_id;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f116043);
  guild_id = undefined;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  require("ConjureGuildExperiment");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let tmp5 = null != guild_id;
  const isConjureGuildEnabled = useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
  if (tmp5) {
    tmp5 = guild_id.type === constants.GUILD_VOICE;
  }
  if (tmp5) {
    tmp5 = isConjureGuildEnabled;
  }
  if (tmp5) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp5 = true !== hasItem;
  }
  return tmp5;
}
export function useVoiceChannelApplicationId(guild_id) {
  _require = guild_id;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f116043);
  guild_id = undefined;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  require("ConjureGuildExperiment");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let tmp5 = null != guild_id;
  const isConjureGuildEnabled = useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
  if (tmp5) {
    tmp5 = guild_id.type === constants.GUILD_VOICE;
  }
  if (tmp5) {
    tmp5 = isConjureGuildEnabled;
  }
  if (tmp5) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp5 = true !== hasItem;
  }
  let tmp9 = null;
  if (tmp5) {
    let application_id;
    if (guild_id != null) {
      application_id = guild_id.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    tmp9 = application_id;
  }
  return tmp9;
}
export function useCanConfigureVoiceChannelApp(channel) {
  _require = channel;
  const tmp = _require;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f116043);
  let guild_id;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  const tmp4 = require("ConjureGuildExperiment");
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let stateFromStores1 = null != channel;
  const isConjureGuildEnabled = useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
  if (stateFromStores1) {
    stateFromStores1 = channel.type === constants.GUILD_VOICE;
  }
  if (stateFromStores1) {
    stateFromStores1 = isConjureGuildEnabled;
  }
  if (stateFromStores1) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
    }
    stateFromStores1 = true !== hasItem;
  }
  const items1 = [PermissionStore];
  const tmpResult = tmp(504);
  if (stateFromStores1) {
    stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
      const canResult = null != channel && PermissionStore.can(metroRequire.MANAGE_CHANNELS, tmp);
      return canResult;
    });
  }
  return stateFromStores1;
}
