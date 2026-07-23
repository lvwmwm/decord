// Module ID: 14406
// Function ID: 110122
// Name: pressable
// Dependencies: [13506, 10095, 14404, 13503, 13745, 2]

// Module 14406 (pressable)
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
    const items = [...Object.values(require(13506) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13506) /* DevToolsScreens */.PerformanceTestingScreens)];
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
    const items = [...Object.values(require(13506) /* DevToolsScreens */.DevToolsScreens), ...Object.values(require(13506) /* DevToolsScreens */.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const result = require("StaffBadgeIcon").fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
