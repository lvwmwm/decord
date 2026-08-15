// Module ID: 14313
// Function ID: 14314
// Name: onPress
// Dependencies: [19, 21, 4342, 14314, 2007, 1500, 7385, 8492, 1236, 14315, 2]

// Module 14313 (onPress)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onPress() {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(14314, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1500).useStackNavigation();
  let obj = stackNavigation(1500);
  const tmp = stackNavigation;
  const params = stackNavigation(7385).useSettingNavigationRoute().params;
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
        return callback2(callback(8492).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14315).UserSettingsConnections, { selectedPlatformType });
});
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
