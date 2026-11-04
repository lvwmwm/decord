// Module ID: 17825
// Function ID: 17826
// Name: ShowDevWidgetSetting
// Dependencies: [8003, 17826, 504, 11729, 17827, 16993, 2]

// Module 17825 (ShowDevWidgetSetting)
import get_initialized from "get initialized" /* 504 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16993 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17826 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17827 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8003 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
