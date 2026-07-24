// Module ID: 11002
// Function ID: 85526
// Name: useGuildIncidentsActionSheetStore
// Dependencies: [7792, 621, 682, 2]
// Exports: resetGuildIncidentsActionSheetStore, setInitialTime, setPauseDms, setPauseInvites, setTime

// Module 11002 (useGuildIncidentsActionSheetStore)
import { DEFAULT_LOCKDOWN_DURATION } from "GUILD_REPORT_RAID_MOBILE_KEY";
import keys from "keys";

let obj = keys.create(() => {
  const obj = { time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false };
  return obj;
});
const result = require("batchUpdates").fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export const useGuildIncidentsActionSheetStore = obj;
export const setTime = function setTime(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState({ time: closure_0, hasTimeChanges: true }));
};
export const setInitialTime = function setInitialTime(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState({ time: closure_0, hasTimeChanges: false }));
};
export const setPauseInvites = function setPauseInvites(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState({ pauseInvites: closure_0 }));
};
export const setPauseDms = function setPauseDms(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState({ pauseDms: closure_0 }));
};
export const resetGuildIncidentsActionSheetStore = function resetGuildIncidentsActionSheetStore() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    const obj = { time: outer1_2, pauseInvites: true, pauseDms: true, hasTimeChanges: false };
    outer1_3.setState(obj);
  });
};
