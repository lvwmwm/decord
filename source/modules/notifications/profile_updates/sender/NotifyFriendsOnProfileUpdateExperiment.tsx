// Module ID: 14574
// Function ID: 111102
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getNotifyFriendsOnProfileUpdateExperiment, useNotifyFriendsOnProfileUpdateExperiment

// Module 14574 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-06-notify-friends-on-profile-update", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateExperiment.tsx");

export default apexExperiment;
export const useNotifyFriendsOnProfileUpdateExperiment = function useNotifyFriendsOnProfileUpdateExperiment(NotifyFriendsOnProfileUpdateSetting) {
  return apexExperiment.useConfig({ location: NotifyFriendsOnProfileUpdateSetting }).enabled;
};
export const getNotifyFriendsOnProfileUpdateExperiment = function getNotifyFriendsOnProfileUpdateExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
