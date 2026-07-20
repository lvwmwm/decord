// Module ID: 15305
// Function ID: 116424
// Name: trackFriendsListClicked
// Dependencies: []
// Exports: default

// Module 15305 (trackFriendsListClicked)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  let source;
  let tab_opened;
  ({ tab_opened, source } = arg0);
  let obj = importDefault(dependencyMap[2]);
  obj = { tab_opened, source };
  const merged = Object.assign(importDefault(dependencyMap[1])());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};
