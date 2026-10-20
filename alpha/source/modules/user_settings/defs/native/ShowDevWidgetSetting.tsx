// Module ID: 16669
// Function ID: 16670
// Name: ShowDevWidgetSetting
// Dependencies: [7736, 16670, 558, 576, 504, 11099, 16671, 15917, 2]

// Module 16669 (ShowDevWidgetSetting)
import react from "react" /* 576 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15917 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 16670 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 16671 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7736 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowDevWidgetSettingToggleValue() {
  let showDevWidget;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevToolsSettingsStore];
    const fn = function n() {
      return showDevWidget.showDevWidget;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useShowDevWidgetSettingToggleValue() {
  let showDevWidget;
  const items = [DevToolsSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => showDevWidget.showDevWidget);
});
let obj = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const obj = DevToolsActionCreators;
    const obj2 = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj2);
  },
  useValue: tmp2,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;
