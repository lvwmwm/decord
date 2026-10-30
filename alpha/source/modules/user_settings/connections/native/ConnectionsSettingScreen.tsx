// Module ID: 16809
// Function ID: 16810
// Name: ConnectionsSettingScreen
// Dependencies: [19, 21, 5253, 16810, 1995, 1498, 7158, 9791, 1114, 16811, 2]

// Module 16809 (ConnectionsSettingScreen)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function onPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16810, dependencyMap.paths), "AddConnection");
}
const jsx = Fragment.jsx;
const memoResult = react.memo(function ConnectionsSettingScreen() {
  let stackNavigation;
  let obj = stackNavigation(1498);
  const tmp = stackNavigation;
  stackNavigation = obj.useStackNavigation();
  const obj2 = stackNavigation(7158);
  const params = obj2.useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight(arg0) {
        let intl;
        const obj = { onPress, label: intl.string(stackNavigation(closure_1_2[8]).t.OYkgVk) };
        const HeaderTextButton = stackNavigation(closure_1_2[7]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = stackNavigation(closure_1_2[8]).intl;
        return closure_1_4(HeaderTextButton, obj);
      }
    };
    stackNavigation.setOptions(obj);
  }, items);
  return jsx(tmp(16811).UserSettingsConnections, { selectedPlatformType });
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
