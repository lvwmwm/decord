// Module ID: 14460
// Function ID: 108949
// Name: apexExperiment
// Dependencies: []
// Exports: getNotifyFriendsOnProfileUpdateExperiment, useNotifyFriendsOnProfileUpdateExperiment

// Module 14460 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": true, "Bool(false)": true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateExperiment.tsx");

export default apexExperiment;
export const useNotifyFriendsOnProfileUpdateExperiment = function useNotifyFriendsOnProfileUpdateExperiment(NotifyFriendsOnProfileUpdateSetting) {
  return apexExperiment.useConfig({ location: NotifyFriendsOnProfileUpdateSetting }).enabled;
};
export const getNotifyFriendsOnProfileUpdateExperiment = function getNotifyFriendsOnProfileUpdateExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
