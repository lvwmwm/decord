// Module ID: 14492
// Function ID: 14493
// Name: ConnectionsSettingScreen
// Dependencies: [19, 21, 4800, 14493, 1981, 1485, 6415, 7288, 1115, 14494, 2]

// Module 14492 (ConnectionsSettingScreen)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function onPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14493, dependencyMap.paths), "AddConnection");
}
const jsx = Fragment.jsx;
const memoResult = react.memo(function ConnectionsSettingScreen() {
  let stackNavigation;
  let obj = stackNavigation(1485);
  const tmp = stackNavigation;
  stackNavigation = obj.useStackNavigation();
  const obj2 = stackNavigation(6415);
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
  return jsx(tmp(14494).UserSettingsConnections, { selectedPlatformType });
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
