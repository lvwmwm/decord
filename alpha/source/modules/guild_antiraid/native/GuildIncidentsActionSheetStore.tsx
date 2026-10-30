// Module ID: 13206
// Function ID: 13207
// Name: GuildIncidentsActionSheetStore
// Dependencies: [8475, 560, 1260, 2]
// Exports: resetGuildIncidentsActionSheetStore, setInitialTime, setPauseDms, setPauseInvites, setTime

// Module 13206 (GuildIncidentsActionSheetStore)
import react_native from "react-native" /* 1260 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8475 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const DEFAULT_LOCKDOWN_DURATION = GuildAntiRaidConstants.DEFAULT_LOCKDOWN_DURATION;
const useGuildIncidentsActionSheetStore = module_560.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false }));
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export { useGuildIncidentsActionSheetStore };
export function setTime(diff) {
  let time;
  _require = diff;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { time, hasTimeChanges: true };
    return obj.setState(obj);
  });
}
export function setInitialTime(time) {
  _require = time;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { time, hasTimeChanges: false };
    return obj.setState(obj);
  });
}
export function setPauseInvites(pauseInvites) {
  _require = pauseInvites;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { pauseInvites };
    return obj.setState(obj);
  });
}
export function setPauseDms(pauseDms) {
  _require = pauseDms;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { pauseDms };
    return obj.setState(obj);
  });
}
export function resetGuildIncidentsActionSheetStore() {
  let state;
  let time;
  let obj = react_native;
  obj.batchUpdates(() => {
    const obj = { time, pauseInvites: true, pauseDms: true, hasTimeChanges: false };
    state.setState(obj);
  });
}
