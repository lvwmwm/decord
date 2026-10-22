// Module ID: 16859
// Function ID: 16860
// Name: ShowDevToolsSetting
// Dependencies: [16860, 11181, 16857, 15779, 16072, 2]

// Module 16859 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 15779 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16072 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 16857 */;
import DevToolsScreens from "DevToolsScreens" /* 16860 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
