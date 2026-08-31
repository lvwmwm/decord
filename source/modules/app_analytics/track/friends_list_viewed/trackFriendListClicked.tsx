// Module ID: 16296
// Function ID: 16297
// Name: trackFriendsListClicked
// Dependencies: [676, 16294, 698, 2]
// Exports: default

// Module 16296 (trackFriendsListClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 16294 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
