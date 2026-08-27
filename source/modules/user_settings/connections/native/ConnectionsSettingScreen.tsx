// Module ID: 14511
// Function ID: 14512
// Name: onPress
// Dependencies: [19, 21, 4412, 14512, 2009, 1500, 7093, 7540, 1236, 14513, 2]

// Module 14511 (onPress)
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onPress() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14512, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1500).useStackNavigation();
  let obj = stackNavigation(1500);
  const tmp = stackNavigation;
  const params = stackNavigation(7093).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = closure_5;
        const intl = callback(1236).intl;
        obj.label = intl.string(callback(1236).t.OYkgVk);
        return callback2(callback(7540).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14513).UserSettingsConnections, { selectedPlatformType });
});
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
