// Module ID: 16529
// Function ID: 16530
// Name: ShowDevToolsSetting
// Dependencies: [16530, 10991, 16527, 15486, 15775, 2]

// Module 16529 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 15486 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15775 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 16527 */;
import DevToolsScreens from "DevToolsScreens" /* 16530 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
