// Module ID: 4185
// Function ID: 36020
// Name: isUserPremiumTypeForClipsEarlyAccess
// Dependencies: []
// Exports: areClipsAvailable, isScreenshotKeybindEnabled, useIsClipsAvailable, useScreenshotKeybindEnabled

// Module 4185 (isUserPremiumTypeForClipsEarlyAccess)
function isUserPremiumTypeForClipsEarlyAccess(currentUser) {
  let premiumType;
  if (null != currentUser) {
    premiumType = currentUser.premiumType;
  }
  return importDefault(dependencyMap[6]).isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
let obj = arg1(dependencyMap[3]);
obj = { "Bool(false)": "<string:1698824193>", "Bool(false)": "<string:822084165>", defaultConfig: { end: true, colors: true }, variations: { [1]: { end: "<string:1040334421>", colors: "<string:1040334338>" }, [2]: { end: null, colors: null } } };
const apexExperiment = obj.createApexExperiment(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (importDefault(dependencyMap[4])(closure_3)) {
    let enableClips = isUserPremiumTypeForClipsEarlyAccess(currentUser.getCurrentUser());
    const obj = { location: "areClipsEnabled" };
    if (!enableClips) {
      enableClips = apexExperiment.getConfig(obj).enableClips;
    }
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = function useIsClipsAvailable() {
  const tmp = importDefault(dependencyMap[4])(closure_3);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
  const obj = arg1(dependencyMap[5]);
  return (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
};
export { isUserPremiumTypeForClipsEarlyAccess };
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
