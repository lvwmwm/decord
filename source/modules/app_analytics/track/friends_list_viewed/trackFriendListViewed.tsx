// Module ID: 15302
// Function ID: 116415
// Name: trackFriendsListViewed
// Dependencies: []
// Exports: default

// Module 15302 (trackFriendsListViewed)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx");

export default function trackFriendsListViewed(source) {
  const tab_opened = source.tab_opened;
  const tmp = importDefault(dependencyMap[1])();
  let obj = importDefault(dependencyMap[2]);
  obj = { tab_opened, source: source.source };
  const merged = Object.assign(tmp);
  obj.track(AnalyticEvents.FRIENDS_LIST_VIEWED, obj);
  obj = {};
  let str = "tabless";
  if (null != tab_opened) {
    str = tab_opened;
  }
  obj.tab_opened = str;
  const num_friends = tmp.num_friends;
  let num = 0;
  if (null != num_friends) {
    num = num_friends;
  }
  obj.num_friends = num;
  const now_playing_visible = tmp.now_playing_visible;
  obj.now_playing_visible = null != now_playing_visible && now_playing_visible;
  const now_playing_num_cards = tmp.now_playing_num_cards;
  let num2 = 0;
  if (null != now_playing_num_cards) {
    num2 = now_playing_num_cards;
  }
  obj.now_playing_num_cards = num2;
  require(dependencyMap[3]).trackClickstream(AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM, obj);
};
