// Module ID: 15437
// Function ID: 118690
// Name: trackFriendsListViewed
// Dependencies: [653, 15438, 675, 6700, 2]
// Exports: default

// Module 15437 (trackFriendsListViewed)
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx");

export default function trackFriendsListViewed(source) {
  const tab_opened = source.tab_opened;
  const tmp = importDefault(15438)();
  let obj = importDefault(675);
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
  require(6700) /* _createForOfIteratorHelperLoose */.trackClickstream(AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM, obj);
};
