// Module ID: 15440
// Function ID: 118699
// Name: trackFriendsListClicked
// Dependencies: [653, 15438, 675, 2]
// Exports: default

// Module 15440 (trackFriendsListClicked)
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  let source;
  let tab_opened;
  ({ tab_opened, source } = arg0);
  let obj = importDefault(675);
  obj = { tab_opened, source };
  const merged = Object.assign(importDefault(15438)());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
