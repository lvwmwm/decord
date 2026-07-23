// Module ID: 12149
// Function ID: 95144
// Name: trackFriendsListItemAction
// Dependencies: [653, 675, 2]
// Exports: trackFriendsListItemClicked, trackFriendsListItemContextMenuInteracted, trackFriendsListItemMessageClicked, trackFriendsListItemRemoveFriendClicked, trackFriendsListItemVideoCallClicked, trackFriendsListItemVoiceCallClicked, trackViewFriendRequestNote

// Module 12149 (trackFriendsListItemAction)
import { AnalyticEvents } from "ME";

function trackFriendsListItemAction(arg0) {
  let actionType;
  let tab;
  let targetUserId;
  ({ targetUserId, tab, actionType } = arg0);
  importDefault(675).track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: actionType });
}
let obj = { ROW_CLICKED: "row_clicked", MESSAGE_CLICKED: "message_clicked", VIDEO_CALL_CLICKED: "video_call_clicked", VOICE_CALL_CLICKED: "voice_call_clicked", REMOVE_FRIEND_CLICKED: "remove_friend_clicked", CONTEXT_MENU_INTERACTED: "context_menu_interacted" };
const result = require("set").fileFinishedImporting("modules/people/PeopleListTracking.tsx");

export const FriendsListItemActionType = obj;
export const trackFriendsListItemClicked = function trackFriendsListItemClicked(targetUserId) {
  obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.ROW_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemMessageClicked = function trackFriendsListItemMessageClicked(targetUserId) {
  obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.MESSAGE_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemVideoCallClicked = function trackFriendsListItemVideoCallClicked(targetUserId) {
  obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.VIDEO_CALL_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemVoiceCallClicked = function trackFriendsListItemVoiceCallClicked(targetUserId) {
  obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.VOICE_CALL_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemRemoveFriendClicked = function trackFriendsListItemRemoveFriendClicked(targetUserId) {
  obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.REMOVE_FRIEND_CLICKED };
  trackFriendsListItemAction(obj);
};
export const trackFriendsListItemContextMenuInteracted = function trackFriendsListItemContextMenuInteracted(targetUserId) {
  obj = { targetUserId: targetUserId.targetUserId, tab: targetUserId.tab, actionType: obj.CONTEXT_MENU_INTERACTED };
  trackFriendsListItemAction(obj);
};
export const trackViewFriendRequestNote = function trackViewFriendRequestNote(arg0) {
  let analyticsLocation;
  let noteLength;
  ({ analyticsLocation, noteLength } = arg0);
  importDefault(675).track(AnalyticEvents.FRIEND_REQUEST_NOTE_VIEWED, { location: analyticsLocation, note_length: noteLength });
};
