// Module ID: 14231
// Function ID: 107573
// Name: useHighlightNotifications
// Dependencies: []
// Exports: useHighlightNotifications

// Module 14231 (useHighlightNotifications)
function useHighlightNotifications() {
  const items = [closure_2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.o8Bypv);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.NOTIFICATIONS,
  useDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.Vw/Xn8);
  },
  usePredicate: useHighlightNotifications,
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return arg1(dependencyMap[6]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
