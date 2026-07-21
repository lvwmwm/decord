// Module ID: 12031
// Function ID: 92955
// Name: trackFriendsListItemAction
// Dependencies: [670, 2, 6]
// Exports: trackFriendsListItemClicked, trackFriendsListItemContextMenuInteracted, trackFriendsListItemMessageClicked, trackFriendsListItemRemoveFriendClicked, trackFriendsListItemVideoCallClicked, trackFriendsListItemVoiceCallClicked, trackViewFriendRequestNote

// Module 12031 (trackFriendsListItemAction)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

function trackFriendsListItemAction(arg0) {
  let actionType;
  let tab;
  let targetUserId;
  ({ targetUserId, tab, actionType } = arg0);
  importDefault(dependencyMap[1]).track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: actionType });
}
const obj = { ROW_CLICKED: "row_clicked", MESSAGE_CLICKED: "message_clicked", VIDEO_CALL_CLICKED: "video_call_clicked", VOICE_CALL_CLICKED: "voice_call_clicked", REMOVE_FRIEND_CLICKED: "remove_friend_clicked", CONTEXT_MENU_INTERACTED: "context_menu_interacted" };
const result = _classCallCheck.fileFinishedImporting("modules/people/PeopleListTracking.tsx");

export const FriendsListItemActionType = obj;
export const trackFriendsListItemClicked = function trackFriendsListItemClicked(targetUserId) {
  const obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.ROW_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemMessageClicked = function trackFriendsListItemMessageClicked(targetUserId) {
  const obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.MESSAGE_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemVideoCallClicked = function trackFriendsListItemVideoCallClicked(targetUserId) {
  const obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.VIDEO_CALL_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemVoiceCallClicked = function trackFriendsListItemVoiceCallClicked(targetUserId) {
  const obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.VOICE_CALL_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemRemoveFriendClicked = function trackFriendsListItemRemoveFriendClicked(targetUserId) {
  const obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.REMOVE_FRIEND_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemContextMenuInteracted = function trackFriendsListItemContextMenuInteracted(targetUserId) {
  const obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.CONTEXT_MENU_INTERACTED };
  trackFriendsListItemAction(obj);
};
export const trackViewFriendRequestNote = function trackViewFriendRequestNote(arg0) {
  let analyticsLocation;
  let noteLength;
  ({ analyticsLocation, noteLength } = arg0);
  importDefault(dependencyMap[1]).track(AnalyticEvents.FRIEND_REQUEST_NOTE_VIEWED, { location: analyticsLocation, note_length: noteLength });
};
