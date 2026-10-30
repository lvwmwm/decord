// Module ID: 17501
// Function ID: 17502
// Name: ShowDevWidgetSetting
// Dependencies: [7856, 17502, 504, 11505, 17503, 16691, 2]

// Module 17501 (ShowDevWidgetSetting)
import get_initialized from "get initialized" /* 504 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16691 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17502 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17503 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7856 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
