// Module ID: 16608
// Function ID: 16609
// Name: MobileReferralSubscriberProfileEntrypointButtonExperiment
// Dependencies: [1103, 1441, 558, 576, 2]

// Module 16608 (MobileReferralSubscriberProfileEntrypointButtonExperiment)
import react from "react" /* 576 */;
import DurationsDefault from "Durations" /* 1103 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = 3 * DurationsDefault.Millis.DAYS_30;
let obj = { name: "2026-05-mobile-referral-subscriber-profile-entrypoint-button", kind: "user", defaultConfig: { enabled: false, showReferralNotificationDot: false }, variations: { 0: { enabled: false, showReferralNotificationDot: false }, 1: { enabled: true, showReferralNotificationDot: false }, 2: { enabled: true, showReferralNotificationDot: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
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
  return closure_2.useConfig(tmp2);
}) : ((location) => {
  const obj = { location };
  return closure_2.useConfig(obj);
});
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = tmp3;
