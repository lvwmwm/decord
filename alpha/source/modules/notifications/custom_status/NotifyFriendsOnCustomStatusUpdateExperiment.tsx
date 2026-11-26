// Module ID: 17616
// Function ID: 17617
// Name: NotifyFriendsOnCustomStatusUpdateExperiment
// Dependencies: [1451, 2]
// Exports: getNotifyFriendsOnCustomStatusUpdateExperiment, useNotifyFriendsOnCustomStatusUpdateExperiment

// Module 17616 (NotifyFriendsOnCustomStatusUpdateExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-11-notify-friends-on-custom-status-update", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateExperiment.tsx");

export default apexExperiment;
export function useNotifyFriendsOnCustomStatusUpdateExperiment(NotifyFriendsOnCustomStatusUpdateSetting) {
  const obj = { location: NotifyFriendsOnCustomStatusUpdateSetting };
  return apexExperiment.useConfig(obj).enabled;
}
export function getNotifyFriendsOnCustomStatusUpdateExperiment(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
}
