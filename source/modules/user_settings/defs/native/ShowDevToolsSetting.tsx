// Module ID: 14537
// Function ID: 14538
// Name: pressable
// Dependencies: [13636, 10120, 14535, 13633, 13873, 2]

// Module 14537 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: require("StaffBadgeIcon").StaffBadgeIcon,
  onPress: require("navigateToDevTools").navigateToDevTools,
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(require(13636) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13636) /* DevToolsScreens */.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: require("StaffBadgeIcon").StaffBadgeIcon,
  onPress: require("navigateToDevTools").navigateToDevTools,
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(require(13636) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13636) /* DevToolsScreens */.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const result = require("StaffBadgeIcon").fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
