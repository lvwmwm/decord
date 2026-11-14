// Module ID: 18608
// Function ID: 18609
// Name: NotifyFriendsOnCustomStatusUpdateExperiment
// Dependencies: [1452, 2]
// Exports: getNotifyFriendsOnCustomStatusUpdateExperiment, useNotifyFriendsOnCustomStatusUpdateExperiment

// Module 18608 (NotifyFriendsOnCustomStatusUpdateExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
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
