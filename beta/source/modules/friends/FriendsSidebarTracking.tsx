// Module ID: 6795
// Function ID: 6796
// Name: FriendsSidebarTracking
// Dependencies: [1087, 1267, 2]
// Exports: trackFriendsSidebarGroupingModeChanged, trackFriendsSidebarHeaderButtonClicked, trackFriendsSidebarToggled, trackFriendsSidebarVoiceGroupingToggled

// Module 6795 (FriendsSidebarTracking)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarTracking.tsx");

export const FRIENDS_SIDEBAR_TAB_NAME = "SIDEBAR";
export const FRIENDS_SIDEBAR_SEARCH_RESULTS_TAB_NAME = "SIDEBAR_SEARCH_RESULTS";
export const FriendsSidebarToggleSource = { SIDEBAR_HEADER_BUTTON: "sidebar_header_button", TOGGLE_BUTTON: "toggle_button", RESIZE_HANDLE: "resize_handle", EXTERNAL: "external" };
export const FriendsSidebarHeaderButtonType = { ADD_FRIEND: "add_friend", SEARCH: "search", GROUPING_MODE_SELECT: "grouping_mode_select" };
export const trackFriendsSidebarToggled = function trackFriendsSidebarToggled(arg0) {
  let analyticsLocations;
  let open;
  let source;
  ({ open, source, analyticsLocations } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_SIDEBAR_TOGGLED, { sidebar_open: open, source, location_stack: analyticsLocations });
};
export const trackFriendsSidebarHeaderButtonClicked = function trackFriendsSidebarHeaderButtonClicked(arg0) {
  let analyticsLocations;
  let button;
  ({ button, analyticsLocations } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_SIDEBAR_HEADER_BUTTON_CLICKED, { button, location_stack: analyticsLocations });
};
export const trackFriendsSidebarGroupingModeChanged = function trackFriendsSidebarGroupingModeChanged(arg0) {
  let analyticsLocations;
  let newGroupingMode;
  let oldGroupingMode;
  ({ oldGroupingMode, newGroupingMode, analyticsLocations } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_SIDEBAR_GROUPING_MODE_CHANGED, { old_grouping_mode: oldGroupingMode, new_grouping_mode: newGroupingMode, location_stack: analyticsLocations });
};
export const trackFriendsSidebarVoiceGroupingToggled = function trackFriendsSidebarVoiceGroupingToggled(arg0) {
  let analyticsLocations;
  let newVoiceGroupingEnabled;
  let oldVoiceGroupingEnabled;
  ({ oldVoiceGroupingEnabled, newVoiceGroupingEnabled, analyticsLocations } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_SIDEBAR_VOICE_GROUPING_TOGGLED, { old_voice_grouping_enabled: oldVoiceGroupingEnabled, new_voice_grouping_enabled: newVoiceGroupingEnabled, location_stack: analyticsLocations });
};
