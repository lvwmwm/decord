// Module ID: 15008
// Function ID: 113067
// Name: _fetchNotificationCenterItems
// Dependencies: []
// Exports: bulkMarkNotificationCenterItemsAcked, deleteNotificationCenterItem, fetchNotificationCenterItems, markNotificationCenterItemAcked, resetNotificationCenter, setNotificationCenterActive, setNotificationCenterTabFocused

// Module 15008 (_fetchNotificationCenterItems)
function _fetchNotificationCenterItems() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchNotificationCenterItems = obj;
  return obj(...arguments);
}
function markNotificationCenterLocalItemsAcked(items) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: items };
  obj.dispatch(obj);
}
function markNotificationCenterRemoteItemAcked(id) {
  return _markNotificationCenterRemoteItemAcked(...arguments);
}
function _markNotificationCenterRemoteItemAcked() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _markNotificationCenterRemoteItemAcked = obj;
  return obj(...arguments);
}
function markNotificationCenterMentionAcked(id) {
  const items = [id];
  importDefault(dependencyMap[3]).dispatch({ ids: items });
}
function _bulkMarkNotificationCenterItemsAcked() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _bulkMarkNotificationCenterItemsAcked = obj;
  return obj(...arguments);
}
function _deleteNotificationCenterItem() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteNotificationCenterItem = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/notification_center/NotificationCenterItemsActions.tsx");

export const setNotificationCenterActive = function setNotificationCenterActive(active) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "NOTIFICATION_CENTER_SET_ACTIVE", active };
  obj.dispatch(obj);
};
export const setNotificationCenterTabFocused = function setNotificationCenterTabFocused(isFocused) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "NOTIFICATION_CENTER_TAB_FOCUSED", focused: isFocused };
  obj.dispatch(obj);
};
export const resetNotificationCenter = function resetNotificationCenter() {
  importDefault(dependencyMap[3]).dispatch({ type: "RESET_NOTIFICATION_CENTER" });
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
    const obj = arg1(dependencyMap[7]);
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
