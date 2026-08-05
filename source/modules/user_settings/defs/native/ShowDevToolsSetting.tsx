// Module ID: 14636
// Function ID: 14637
// Name: pressable
// Dependencies: [13723, 10333, 14634, 13720, 13966, 2]

// Module 14636 (pressable)
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
    const items = [...Object.values(require(13723) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13723) /* DevToolsScreens */.PerformanceTestingScreens)];
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
    const items = [...Object.values(require(13723) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13723) /* DevToolsScreens */.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const result = require("StaffBadgeIcon").fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
