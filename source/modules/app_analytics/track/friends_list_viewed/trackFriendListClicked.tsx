// Module ID: 16752
// Function ID: 16753
// Name: trackFriendsListClicked
// Dependencies: [1074, 16750, 1242, 2]
// Exports: default

// Module 16752 (trackFriendsListClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 16750 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
