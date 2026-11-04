// Module ID: 9055
// Function ID: 9056
// Name: PinotExperiment
// Dependencies: [1246, 1447, 504, 2]
// Exports: isPinotAdminEnabled, isPinotMemberEnabled, useIsPinotAdminEnabled, useIsPinotChannelDiscoverableEnabled, useIsPinotMemberEnabled, useIsPinotMemberEnabledWithoutExposure, useIsPinotMemberNoticeEnabled

// Module 9055 (PinotExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ApexExperiment_mod from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-10-pinot-admin", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj2 = { name: "2026-10-pinot-member", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-10-pinot-member-notice", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj4 = { name: "2026-10-pinot-channel-discoverable", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj4);
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export const PinotChannelDiscoverableExperiment = apexExperiment3;
export function useIsPinotAdminEnabled(guild_id, create_guild_channel) {
  let str = guild_id;
  const useConfig = apexExperiment.useConfig;
  if (guild_id == null) {
    str = "";
  }
  const obj = { guildId: str, location: create_guild_channel };
  const tmp2 = null != guild_id && useConfig(obj).enabled;
  return tmp2;
}
export function isPinotAdminEnabled(guildId, location) {
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export function useIsPinotMemberNoticeEnabled(guild_id, location) {
  let str = guild_id;
  const useConfig = apexExperiment2.useConfig;
  if (guild_id == null) {
    str = "";
  }
  const obj = { guildId: str, location };
  const tmp2 = null != guild_id && useConfig(obj).enabled;
  return tmp2;
}
export function useIsPinotChannelDiscoverableEnabled(guildId, create_guild_channel) {
  let str = guildId;
  const useConfig = apexExperiment3.useConfig;
  if (guildId == null) {
    str = "";
  }
  const obj = { guildId: str, location: create_guild_channel };
  const tmp2 = null != guildId && useConfig(obj).enabled;
  return tmp2;
}
export function useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy) {
  const obj = { location: mobile_user_settings_data_and_privacy };
  return apexExperiment1.useConfig(obj).enabled;
}
export function isPinotMemberEnabled(location, arg1) {
  const obj = { location };
  return apexExperiment1.getConfig(obj, arg1).enabled;
}
export function useIsPinotMemberEnabledWithoutExposure(mobile_member_coachmark) {
  let _location;
  _require = mobile_member_coachmark;
  let obj = require("get initialized");
  const items = [ApexExperimentStore];
  const items1 = [mobile_member_coachmark];
  return obj.useStateFromStores(items, () => {
    const obj = { location: _location };
    return apexExperiment1.getConfig(obj, { autoTrackExposure: false }).enabled;
  }, items1);
}
