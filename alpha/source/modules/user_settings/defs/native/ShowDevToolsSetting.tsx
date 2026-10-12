// Module ID: 15883
// Function ID: 15884
// Name: ShowDevToolsSetting
// Dependencies: [15884, 10663, 15881, 14831, 15121, 2]

// Module 15883 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 14831 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15121 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15881 */;
import DevToolsScreens from "DevToolsScreens" /* 15884 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const obj = {
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: DevToolsNavigator.navigateToDevTools,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    let values2;
    const items = [...values(DevToolsScreens.DevToolsScreens), ...values2(DevToolsScreens.PerformanceTestingScreens)];
    values2 = Object.values;
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
