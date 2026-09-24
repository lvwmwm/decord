// Module ID: 11995
// Function ID: 11996
// Name: GuildIncidentsActionSheetStore
// Dependencies: [8311, 562, 1252, 2]
// Exports: resetGuildIncidentsActionSheetStore, setInitialTime, setPauseDms, setPauseInvites, setTime

// Module 11995 (GuildIncidentsActionSheetStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8311 */;
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DEFAULT_LOCKDOWN_DURATION = GuildAntiRaidConstants.DEFAULT_LOCKDOWN_DURATION;
const useGuildIncidentsActionSheetStore = module_562.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false }));
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export { useGuildIncidentsActionSheetStore };
export const setTime = function setTime(diff) {
  _require = diff;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { time, hasTimeChanges: true };
    return obj.setState(obj);
  });
};
export const setInitialTime = function setInitialTime(time) {
  _require = time;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { time, hasTimeChanges: false };
    return obj.setState(obj);
  });
};
export const setPauseInvites = function setPauseInvites(pauseInvites) {
  _require = pauseInvites;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { pauseInvites };
    return obj.setState(obj);
  });
};
export const setPauseDms = function setPauseDms(pauseDms) {
  _require = pauseDms;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { pauseDms };
    return obj.setState(obj);
  });
};
export const resetGuildIncidentsActionSheetStore = function resetGuildIncidentsActionSheetStore() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ time, pauseInvites: true, pauseDms: true, hasTimeChanges: false });
  });
};
