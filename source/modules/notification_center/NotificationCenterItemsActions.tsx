// Module ID: 15188
// Function ID: 115659
// Name: _fetchNotificationCenterItems
// Dependencies: [5, 6881, 653, 686, 4942, 480, 1361, 6883, 507, 3803, 2]
// Exports: bulkMarkNotificationCenterItemsAcked, deleteNotificationCenterItem, fetchNotificationCenterItems, markNotificationCenterItemAcked, resetNotificationCenter, setNotificationCenterActive, setNotificationCenterTabFocused

// Module 15188 (_fetchNotificationCenterItems)
import isThrottled from "isThrottled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _fetchNotificationCenterItems() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function markNotificationCenterLocalItemsAcked(items) {
  let obj = importDefault(686);
  obj = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: items };
  obj.dispatch(obj);
}
function markNotificationCenterRemoteItemAcked(id) {
  return _markNotificationCenterRemoteItemAcked(...arguments);
}
function _markNotificationCenterRemoteItemAcked() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function markNotificationCenterMentionAcked(id) {
  let obj = importDefault(686);
  obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true };
  const items = [id];
  obj.ids = items;
  obj.dispatch(obj);
}
function _bulkMarkNotificationCenterItemsAcked() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteNotificationCenterItem() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ME").fileFinishedImporting("modules/notification_center/NotificationCenterItemsActions.tsx");

export const setNotificationCenterActive = function setNotificationCenterActive(active) {
  let obj = importDefault(686);
  obj = { type: "NOTIFICATION_CENTER_SET_ACTIVE", active };
  obj.dispatch(obj);
};
export const setNotificationCenterTabFocused = function setNotificationCenterTabFocused(isFocused) {
  let obj = importDefault(686);
  obj = { type: "NOTIFICATION_CENTER_TAB_FOCUSED", focused: isFocused };
  obj.dispatch(obj);
};
export const resetNotificationCenter = function resetNotificationCenter() {
  importDefault(686).dispatch({ type: "RESET_NOTIFICATION_CENTER" });
};
export const fetchNotificationCenterItems = function fetchNotificationCenterItems(notificationCenterItems, arg1) {
  return _fetchNotificationCenterItems(...arguments);
};
export const markNotificationCenterItemAcked = function markNotificationCenterItemAcked(local_id) {
  if (null != local_id.local_id) {
    const items = [local_id.local_id];
    markNotificationCenterLocalItemsAcked(items);
  } else {
    if (obj.isMentionItem(local_id)) {
      markNotificationCenterMentionAcked(local_id.id);
    } else {
      markNotificationCenterRemoteItemAcked(local_id.id);
    }
    obj = require(6883) /* getRelativeTimestamp */;
  }
};
export { markNotificationCenterLocalItemsAcked };
export { markNotificationCenterRemoteItemAcked };
export { markNotificationCenterMentionAcked };
export const bulkMarkNotificationCenterItemsAcked = function bulkMarkNotificationCenterItemsAcked(found) {
  return _bulkMarkNotificationCenterItemsAcked(...arguments);
};
export const deleteNotificationCenterItem = function deleteNotificationCenterItem(arg0) {
  return _deleteNotificationCenterItem(...arguments);
};
