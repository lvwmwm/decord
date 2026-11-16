// Module ID: 18211
// Function ID: 18212
// Name: ShowDevWidgetSetting
// Dependencies: [8826, 18212, 504, 12406, 18213, 17372, 2]

// Module 18211 (ShowDevWidgetSetting)
import get_initialized from "get initialized" /* 504 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17372 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 18212 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 18213 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8826 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

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
  useValue: function useShowDevWidgetSettingToggleValue() {
    let showDevWidget;
    const items = [DevToolsSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;
