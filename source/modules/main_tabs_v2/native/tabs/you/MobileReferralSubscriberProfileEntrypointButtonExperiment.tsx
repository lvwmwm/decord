// Module ID: 15352
// Function ID: 116923
// Name: result
// Dependencies: []
// Exports: useMobileReferralSubscriberProfileEntrypointButtonConfig

// Module 15352 (result)
const result = 3 * importDefault(dependencyMap[0]).Millis.DAYS_30;
let obj = arg1(dependencyMap[1]);
obj = { 9223372036854775807: null, 0: null, defaultConfig: { -2140421667: null, -1080651043: null }, variations: { [0]: { -2140421667: null, -1080651043: null }, [1]: { -2140421667: true, -1080651043: true }, [2]: { -2140421667: null, -1080651043: null } } };
let closure_0 = obj.createApexExperiment(obj);
const result1 = arg1(dependencyMap[2]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = function useMobileReferralSubscriberProfileEntrypointButtonConfig(YouBannerDecorations) {
  return closure_0.useConfig({ location: YouBannerDecorations });
};
