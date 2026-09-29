// Module ID: 14667
// Function ID: 14668
// Name: ConnectionsSettingScreen
// Dependencies: [19, 21, 4800, 14668, 1981, 1485, 6581, 7453, 1115, 14669, 2]

// Module 14667 (ConnectionsSettingScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import noop from "module_19" /* 19 */;

require = fn;
function onPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14668, dependencyMap.paths), "AddConnection");
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default noop.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1485).useStackNavigation();
  let obj = stackNavigation(1485);
  const tmp = stackNavigation;
  const params = stackNavigation(6581).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = onPress;
        const intl = stackNavigation(1115).intl;
        obj.label = intl.string(stackNavigation(1115).t.OYkgVk);
        return closure_1_4(stackNavigation(7453).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14669).UserSettingsConnections, { selectedPlatformType });
});
