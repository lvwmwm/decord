// Module ID: 14226
// Function ID: 107527
// Name: route
// Dependencies: []

// Module 14226 (route)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.D9yVAH);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.0PhAOH);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [closure_2];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.COMMUNITY_ALERTS,
  getComponent() {
    return arg1(dependencyMap[6]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
