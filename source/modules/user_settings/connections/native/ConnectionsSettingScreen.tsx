// Module ID: 14080
// Function ID: 14081
// Name: onPress
// Dependencies: [19, 21, 4223, 14081, 1959, 1480, 6772, 8165, 1236, 14082, 2]

// Module 14080 (onPress)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onPress() {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(14081, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1480).useStackNavigation();
  let obj = stackNavigation(1480);
  const tmp = stackNavigation;
  const params = stackNavigation(6772).useSettingNavigationRoute().params;
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
        return callback2(callback(8165).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14082).UserSettingsConnections, { selectedPlatformType });
});
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
