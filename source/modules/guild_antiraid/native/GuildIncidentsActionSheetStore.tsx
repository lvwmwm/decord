// Module ID: 10964
// Function ID: 85275
// Name: useGuildIncidentsActionSheetStore
// Dependencies: []
// Exports: resetGuildIncidentsActionSheetStore, setInitialTime, setPauseDms, setPauseInvites, setTime

// Module 10964 (useGuildIncidentsActionSheetStore)
const DEFAULT_LOCKDOWN_DURATION = require(dependencyMap[0]).DEFAULT_LOCKDOWN_DURATION;
const _module = require(dependencyMap[1]);
const obj = _module.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION }));
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export const useGuildIncidentsActionSheetStore = obj;
export const setTime = function setTime(arg0) {
  const require = arg0;
  require(dependencyMap[2]).batchUpdates(() => state.setState({ time: arg0, hasTimeChanges: true }));
};
export const setInitialTime = function setInitialTime(arg0) {
  const require = arg0;
  require(dependencyMap[2]).batchUpdates(() => state.setState({ time: arg0, hasTimeChanges: false }));
};
export const setPauseInvites = function setPauseInvites(arg0) {
  const require = arg0;
  require(dependencyMap[2]).batchUpdates(() => state.setState({ pauseInvites: arg0 }));
};
export const setPauseDms = function setPauseDms(arg0) {
  const require = arg0;
  require(dependencyMap[2]).batchUpdates(() => state.setState({ pauseDms: arg0 }));
};
export const resetGuildIncidentsActionSheetStore = function resetGuildIncidentsActionSheetStore() {
  require(dependencyMap[2]).batchUpdates(() => {
    state.setState({ time: closure_2 });
  });
};
