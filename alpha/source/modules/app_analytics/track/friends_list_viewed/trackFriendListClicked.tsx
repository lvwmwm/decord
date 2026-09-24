// Module ID: 17331
// Function ID: 17332
// Name: trackFriendListClicked
// Dependencies: [1074, 17329, 1241, 2]
// Exports: default

// Module 17331 (trackFriendListClicked)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 17329 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  const tmp = getTrackFriendsListViewedDataDefault();
  const merged = Object.assign(tmp);
  AnalyticsUtilsDefault.track(AnalyticEvents.FRIENDS_LIST_CLICKED, { tab_opened, source });
};
