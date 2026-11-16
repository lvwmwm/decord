// Module ID: 17936
// Function ID: 17937
// Name: ShowDevWidgetSetting
// Dependencies: [7973, 17937, 504, 11717, 17938, 17095, 2]

// Module 17936 (ShowDevWidgetSetting)
import get_initialized from "get initialized" /* 504 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17095 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17937 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17938 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7973 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
