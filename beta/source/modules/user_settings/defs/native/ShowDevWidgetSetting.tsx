// Module ID: 17008
// Function ID: 17009
// Name: ShowDevWidgetSetting
// Dependencies: [8422, 17009, 504, 11942, 17010, 16156, 2]

// Module 17008 (ShowDevWidgetSetting)
import get_initialized from "get initialized" /* 504 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16156 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17009 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17010 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8422 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
