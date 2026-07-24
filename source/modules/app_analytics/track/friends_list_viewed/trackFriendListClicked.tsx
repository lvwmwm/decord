// Module ID: 15487
// Function ID: 119021
// Name: trackFriendsListClicked
// Dependencies: [653, 15485, 675, 2]
// Exports: default

// Module 15487 (trackFriendsListClicked)
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  let source;
  let tab_opened;
  ({ tab_opened, source } = arg0);
  let obj = importDefault(675);
  obj = { tab_opened, source };
  const merged = Object.assign(importDefault(15485)());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
