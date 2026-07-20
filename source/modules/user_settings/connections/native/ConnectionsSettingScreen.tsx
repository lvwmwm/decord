// Module ID: 13729
// Function ID: 103857
// Name: onPress
// Dependencies: []

// Module 13729 (onPress)
function onPress() {
  importDefault(dependencyMap[2]).openLazy(arg1(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "AddConnection");
}
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  let obj = arg1(dependencyMap[5]);
  const stackNavigation = obj.useStackNavigation();
  const arg1 = stackNavigation;
  const params = arg1(dependencyMap[6]).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (null != params) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onPress"] = closure_5;
        const intl = callback(closure_2[8]).intl;
        obj["label"] = intl.string(callback(closure_2[8]).t.OYkgVk);
        return callback2(callback(closure_2[7]).HeaderTextButton, obj);
      }
    });
  }, items);
  obj = { selectedPlatformType };
  return jsx(arg1(dependencyMap[9]).UserSettingsConnections, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
