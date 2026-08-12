// Module ID: 14268
// Function ID: 14269
// Name: onPress
// Dependencies: [19, 21, 4312, 14269, 2007, 1499, 6919, 8427, 1236, 14270, 2]

// Module 14268 (onPress)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onPress() {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(14269, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1499).useStackNavigation();
  let obj = stackNavigation(1499);
  const tmp = stackNavigation;
  const params = stackNavigation(6919).useSettingNavigationRoute().params;
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
        return callback2(callback(8427).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14270).UserSettingsConnections, { selectedPlatformType });
});
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
