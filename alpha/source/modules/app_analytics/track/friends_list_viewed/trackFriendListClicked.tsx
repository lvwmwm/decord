// Module ID: 18911
// Function ID: 18912
// Name: trackFriendListClicked
// Dependencies: [1072, 18909, 1256, 2]
// Exports: default

// Module 18911 (trackFriendListClicked)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 18909 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  let source;
  let tab_opened;
  ({ tab_opened, source } = arg0);
  const tmp = getTrackFriendsListViewedDataDefault();
  const track = AnalyticsUtilsDefault.track;
  const FRIENDS_LIST_CLICKED = AnalyticEvents.FRIENDS_LIST_CLICKED;
  const obj = { tab_opened, source };
  AnalyticsUtilsDefault;
  const merged = Object.assign(tmp);
  track(FRIENDS_LIST_CLICKED, obj);
};
