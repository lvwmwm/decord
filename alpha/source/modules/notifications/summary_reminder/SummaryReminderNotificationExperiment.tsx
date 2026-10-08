// Module ID: 15616
// Function ID: 15617
// Name: SummaryReminderNotificationExperiment
// Dependencies: [1452, 558, 576, 2]

// Module 15616 (SummaryReminderNotificationExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-10-summary-reminder-notif-re-revival", defaultConfig: { showSettingsToggle: false }, variations: obj2 };
obj2 = { 1: null, 2: { showSettingsToggle: true } };
obj2[2] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSummaryReminderNotificationExperiment(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : (function useSummaryReminderNotificationExperiment(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj);
});
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx");

export default apexExperiment;
export const useSummaryReminderNotificationExperiment = tmp3;
