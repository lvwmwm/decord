// Module ID: 15937
// Function ID: 15938
// Name: ShowDevToolsSetting
// Dependencies: [15938, 11811, 15935, 14953, 15188, 2]

// Module 15937 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 14953 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15188 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15935 */;
import DevToolsScreens from "DevToolsScreens" /* 15938 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: DevToolsNavigator.navigateToDevTools,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(DevToolsScreens.DevToolsScreens), ...Object.values(DevToolsScreens.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
