// Module ID: 14533
// Function ID: 14534
// Name: pressable
// Dependencies: [13631, 10116, 14531, 13628, 13868, 2]

// Module 14533 (pressable)
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
    const items = [...Object.values(require(13631) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13631) /* DevToolsScreens */.PerformanceTestingScreens)];
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
    const items = [...Object.values(require(13631) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13631) /* DevToolsScreens */.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const result = require("StaffBadgeIcon").fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
