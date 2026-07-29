// Module ID: 15583
// Function ID: 15584
// Name: trackFriendsListClicked
// Dependencies: [676, 15581, 698, 2]
// Exports: default

// Module 15583 (trackFriendsListClicked)
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  let source;
  let tab_opened;
  ({ tab_opened, source } = arg0);
  let obj = importDefault(698);
  obj = { tab_opened, source };
  const merged = Object.assign(importDefault(15581)());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
