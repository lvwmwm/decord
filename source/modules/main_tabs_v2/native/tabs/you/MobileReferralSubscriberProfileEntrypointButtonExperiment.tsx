// Module ID: 15363
// Function ID: 117005
// Name: result
// Dependencies: []
// Exports: useMobileReferralSubscriberProfileEntrypointButtonConfig

// Module 15363 (result)
const result = 3 * importDefault(dependencyMap[0]).Millis.DAYS_30;
let closure_0 = arg1(dependencyMap[1]).createApexExperiment({ defaultConfig: { "Bool(true)": true, "Bool(true)": true }, variations: { [0]: { "Bool(true)": true, "Bool(true)": true }, [1]: { "Bool(true)": "<string:1040334421>", "Bool(true)": "<string:1040334338>" }, [2]: { "Bool(true)": null, "Bool(true)": null } } });
const obj = arg1(dependencyMap[1]);
const result1 = arg1(dependencyMap[2]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = function useMobileReferralSubscriberProfileEntrypointButtonConfig(YouBannerDecorations) {
  return closure_0.useConfig({ location: YouBannerDecorations });
};
