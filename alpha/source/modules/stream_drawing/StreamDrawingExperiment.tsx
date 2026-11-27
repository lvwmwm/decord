// Module ID: 15152
// Function ID: 15153
// Name: StreamDrawingExperiment
// Dependencies: [4892, 4914, 1071, 1451, 504, 15151, 2]
// Exports: getIsStreamDrawingEnabled, useIsStreamDrawingEnabled

// Module 15152 (StreamDrawingExperiment)
import Constants from "Constants" /* 1071 */;
import StreamDrawingChannel from "StreamDrawingChannel" /* 15151 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import ApexExperiment_mod from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-11-stream-drawing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj2 = { name: "2026-11-stream-drawing-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/stream_drawing/StreamDrawingExperiment.tsx");

export const StreamDrawingExperiment = apexExperiment;
export const StreamDrawingGuildExperiment = apexExperiment1;
export function useIsStreamDrawingEnabled(arg0, location) {
  let closure_0;
  let guildId;
  let supported;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelStore, GuildStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guild_id1;
    let supportsStreamDrawing;
    const channel = ChannelStore.getChannel(closure_0);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const obj = { guildId: guild_id, supported: supportsStreamDrawing(channel, getGuild(guild_id1)) };
    guild_id1 = undefined;
    supportsStreamDrawing = StreamDrawingChannel.supportsStreamDrawing;
    getGuild = GuildStore.getGuild;
    StreamDrawingChannel;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    return obj;
  }, items1);
  ({ guildId, supported } = stateFromStoresObject);
  const obj2 = { location };
  const config = apexExperiment.useConfig(obj2, { autoTrackExposure: supported });
  if (supported) {
    let enabled = config.enabled;
    if (!enabled) {
      enabled = null != guildId && tmp5.enabled;
    }
    supported = enabled;
  }
  return supported;
}
export function getIsStreamDrawingEnabled(channelId, LocalVoiceStateManager, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const obj = StreamDrawingChannel;
  if (obj.supportsStreamDrawing(channel, GuildStore.getGuild(guild_id))) {
    let config1;
    const obj2 = { location: LocalVoiceStateManager };
    const obj3 = { autoTrackExposure: flag };
    const config = apexExperiment.getConfig(obj2, obj3);
    if (null != guild_id) {
      const obj4 = { guildId: guild_id, location: LocalVoiceStateManager };
      const obj5 = { autoTrackExposure: flag };
      config1 = apexExperiment1.getConfig(obj4, obj5);
    }
    let enabled = config.enabled;
    if (!enabled) {
      let enabled1;
      if (config1 != null) {
        enabled1 = config1.enabled;
      }
      enabled = true === enabled1;
    }
    return enabled;
  } else {
    return false;
  }
}
