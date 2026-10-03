// Module ID: 15403
// Function ID: 15404
// Name: ShowDevToolsSetting
// Dependencies: [15404, 11129, 15401, 14402, 14646, 2]

// Module 15403 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 14402 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14646 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15401 */;
import DevToolsScreens from "DevToolsScreens" /* 15404 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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
