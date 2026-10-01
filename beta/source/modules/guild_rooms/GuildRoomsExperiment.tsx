// Module ID: 5036
// Function ID: 5037
// Name: GuildRoomsExperiment
// Dependencies: [2108, 4748, 504, 2]
// Exports: getGuildRoomsConfig, useGuildRoomsExperiment

// Module 5036 (GuildRoomsExperiment)
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import createExperiment from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items;
let obj = { kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }, { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } }, { id: 5, label: "Enable Guild Rooms with Room 2 Default and Selector", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }];
let closure_3 = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export const GUILD_ROOMS_EXPERIMENT_ID = "2026-06_guild_rooms";
export const getGuildRoomsConfig = function getGuildRoomsConfig(guildId, disable) {
  let flag;
  const getCurrentConfig = closure_3.getCurrentConfig;
  const obj = { autoTrackExposure: true, disable: flag };
  const merged = Object.assign(disable);
  flag = undefined;
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    guildId = guildId.guildId;
    flag = !(null != guildId && !GuildMemberStore.isCurrentUserGuest(guildId));
    const tmp3 = null != guildId && !GuildMemberStore.isCurrentUserGuest(guildId);
  }
  return getCurrentConfig(guildId, obj);
};
export const useGuildRoomsExperiment = function useGuildRoomsExperiment(guildId, arg1) {
  let flag;
  _require = guildId;
  const items = [GuildMemberStore];
  const items1 = [guildId.guildId];
  const obj2 = { autoTrackExposure: true, disable: flag };
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId.guildId && !GuildMemberStore.isCurrentUserGuest(tmp.guildId);
    return tmp2;
  }, items1);
  let tmp2 = closure_3;
  const useExperiment = closure_3.useExperiment;
  const merged = Object.assign(arg1);
  flag = undefined;
  if (arg1 != null) {
    flag = arg1.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    flag = !stateFromStores;
  }
  return useExperiment(guildId, obj2);
};
