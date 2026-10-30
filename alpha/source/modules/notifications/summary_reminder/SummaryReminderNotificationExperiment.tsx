// Module ID: 17437
// Function ID: 17438
// Name: SummaryReminderNotificationExperiment
// Dependencies: [1448, 2]
// Exports: useSummaryReminderNotificationExperiment

// Module 17437 (SummaryReminderNotificationExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-10-summary-reminder-notif-re-revival", defaultConfig: { showSettingsToggle: false }, variations: obj2 };
obj2 = { 1: null, 2: { showSettingsToggle: true } };
obj2[2] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx");

export default apexExperiment;
export function useSummaryReminderNotificationExperiment(tabsV2Settings) {
  const obj = { location: tabsV2Settings };
  return apexExperiment.useConfig(obj);
}
