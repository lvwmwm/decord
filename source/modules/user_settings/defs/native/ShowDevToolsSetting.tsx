// Module ID: 14468
// Function ID: 110577
// Name: pressable
// Dependencies: [13571, 10059, 14466, 13568, 13808, 2]

// Module 14468 (pressable)
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
    const items = [...Object.values(require(13571) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13571) /* DevToolsScreens */.PerformanceTestingScreens)];
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
    const items = [...Object.values(require(13571) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13571) /* DevToolsScreens */.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const result = require("StaffBadgeIcon").fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
