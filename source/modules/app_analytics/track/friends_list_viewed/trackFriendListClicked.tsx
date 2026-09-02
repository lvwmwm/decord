// Module ID: 16564
// Function ID: 16565
// Name: trackFriendsListClicked
// Dependencies: [673, 16562, 695, 2]
// Exports: default

// Module 16564 (trackFriendsListClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 16562 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
