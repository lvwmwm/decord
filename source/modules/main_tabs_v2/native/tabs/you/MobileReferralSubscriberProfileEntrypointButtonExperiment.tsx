// Module ID: 15480
// Function ID: 119179
// Name: result
// Dependencies: [664, 1428, 2]
// Exports: useMobileReferralSubscriberProfileEntrypointButtonConfig

// Module 15480 (result)
import ApexExperiment from "ApexExperiment";

const result = 3 * require("set").Millis.DAYS_30;
ApexExperiment = { name: "2026-05-mobile-referral-subscriber-profile-entrypoint-button", kind: "user", defaultConfig: { enabled: false, showReferralNotificationDot: false }, variations: { [0]: { enabled: false, showReferralNotificationDot: false }, [1]: { enabled: true, showReferralNotificationDot: false }, [2]: { enabled: true, showReferralNotificationDot: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result1 = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = function useMobileReferralSubscriberProfileEntrypointButtonConfig(YouBannerDecorations) {
  return ApexExperiment.useConfig({ location: YouBannerDecorations });
};
