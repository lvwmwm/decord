// Module ID: 15013
// Function ID: 15014
// Name: PeopleListTracking
// Dependencies: [1072, 1252, 2]
// Exports: trackFriendsListItemClicked, trackFriendsListItemContextMenuInteracted, trackFriendsListItemMessageClicked, trackFriendsListItemRemoveFriendClicked, trackFriendsListItemVideoCallClicked, trackFriendsListItemVoiceCallClicked, trackViewFriendRequestNote

// Module 15013 (PeopleListTracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const FriendsListItemActionType = { ROW_CLICKED: "row_clicked", MESSAGE_CLICKED: "message_clicked", VIDEO_CALL_CLICKED: "video_call_clicked", VOICE_CALL_CLICKED: "voice_call_clicked", REMOVE_FRIEND_CLICKED: "remove_friend_clicked", CONTEXT_MENU_INTERACTED: "context_menu_interacted" };
const result = size.fileFinishedImporting("modules/people/PeopleListTracking.tsx");

export { FriendsListItemActionType };
export function trackFriendsListItemClicked(arg0) {
  let obj;
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const ROW_CLICKED = obj.ROW_CLICKED;
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: ROW_CLICKED });
}
export function trackFriendsListItemMessageClicked(arg0) {
  let obj;
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const MESSAGE_CLICKED = obj.MESSAGE_CLICKED;
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: MESSAGE_CLICKED });
}
export function trackFriendsListItemVideoCallClicked(arg0) {
  let obj;
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const VIDEO_CALL_CLICKED = obj.VIDEO_CALL_CLICKED;
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: VIDEO_CALL_CLICKED });
}
export function trackFriendsListItemVoiceCallClicked(arg0) {
  let obj;
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const VOICE_CALL_CLICKED = obj.VOICE_CALL_CLICKED;
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: VOICE_CALL_CLICKED });
}
export function trackFriendsListItemRemoveFriendClicked(arg0) {
  let obj;
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const REMOVE_FRIEND_CLICKED = obj.REMOVE_FRIEND_CLICKED;
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: REMOVE_FRIEND_CLICKED });
}
export function trackFriendsListItemContextMenuInteracted(arg0) {
  let obj;
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const CONTEXT_MENU_INTERACTED = obj.CONTEXT_MENU_INTERACTED;
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: CONTEXT_MENU_INTERACTED });
}
export function trackViewFriendRequestNote(arg0) {
  let analyticsLocation;
  let noteLength;
  ({ analyticsLocation, noteLength } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIEND_REQUEST_NOTE_VIEWED, { location: analyticsLocation, note_length: noteLength });
}
