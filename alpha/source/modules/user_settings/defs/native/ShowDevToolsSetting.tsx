// Module ID: 16196
// Function ID: 16197
// Name: ShowDevToolsSetting
// Dependencies: [16197, 10663, 16194, 15152, 15442, 2]

// Module 16196 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 15152 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15442 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 16194 */;
import DevToolsScreens from "DevToolsScreens" /* 16197 */;
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
