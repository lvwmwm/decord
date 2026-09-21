// Module ID: 17262
// Function ID: 17263
// Name: MobileReferralSubscriberProfileEntrypointButtonExperiment
// Dependencies: [1095, 1438, 558, 568, 2]

// Module 17262 (MobileReferralSubscriberProfileEntrypointButtonExperiment)
import c from "c" /* 568 */;
import DurationsDefault from "Durations" /* 1095 */;

require = fn;
const result = 3 * DurationsDefault.Millis.DAYS_30;
const ApexExperiment = fn(1438);
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-referral-subscriber-profile-entrypoint-button", kind: "user", defaultConfig: { enabled: false, showReferralNotificationDot: false }, variations: { 0: { enabled: false, showReferralNotificationDot: false }, 1: { enabled: true, showReferralNotificationDot: false }, 2: { enabled: true, showReferralNotificationDot: true } } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2);
}) : ((location) => closure_2.useConfig({ location }));
