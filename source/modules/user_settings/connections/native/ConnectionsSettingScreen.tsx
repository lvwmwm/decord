// Module ID: 13922
// Function ID: 106547
// Name: onPress
// Dependencies: [31, 33, 4099, 13923, 1935, 1456, 6273, 9050, 1212, 13924, 2]

// Module 13922 (onPress)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
function onPress() {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(13923, dependencyMap.paths), "AddConnection");
}
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  let obj = stackNavigation(1456);
  stackNavigation = obj.useStackNavigation();
  const params = stackNavigation(6273).useSettingNavigationRoute().params;
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
        obj["onPress"] = outer2_5;
        const intl = stackNavigation(outer2_2[8]).intl;
        obj["label"] = intl.string(stackNavigation(outer2_2[8]).t.OYkgVk);
        return outer2_4(stackNavigation(outer2_2[7]).HeaderTextButton, obj);
      }
    });
  }, items);
  obj = { selectedPlatformType };
  return jsx(stackNavigation(13924).UserSettingsConnections, { selectedPlatformType });
});
const result = require("showActionSheet").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;
