// Module ID: 16606
// Function ID: 16607
// Name: MobileReferralSubscriberProfileEntrypointButtonExperiment
// Dependencies: [1091, 1435, 2]
// Exports: useMobileReferralSubscriberProfileEntrypointButtonConfig

// Module 16606 (MobileReferralSubscriberProfileEntrypointButtonExperiment)
import DurationsDefault from "Durations" /* 1091 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const result = 3 * DurationsDefault.Millis.DAYS_30;
let obj = { name: "2026-05-mobile-referral-subscriber-profile-entrypoint-button", kind: "user", defaultConfig: { enabled: false, showReferralNotificationDot: false }, variations: { 0: { enabled: false, showReferralNotificationDot: false }, 1: { enabled: true, showReferralNotificationDot: false }, 2: { enabled: true, showReferralNotificationDot: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = function useMobileReferralSubscriberProfileEntrypointButtonConfig(YouBannerDecorations) {
  const obj = { location: YouBannerDecorations };
  return closure_0.useConfig(obj);
};
