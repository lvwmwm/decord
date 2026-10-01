// Module ID: 10742
// Function ID: 10743
// Name: DeveloperActivityShelfActionCreators
// Dependencies: [573, 2]
// Exports: markActivityUsed, setActivityUrlOverride, toggleUseActivityUrlOverride, updateFilter

// Module 10742 (DeveloperActivityShelfActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export const toggleUseActivityUrlOverride = function toggleUseActivityUrlOverride() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
};
export const setActivityUrlOverride = function setActivityUrlOverride(activityUrlOverride) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride };
  obj.dispatch(obj2);
};
export const markActivityUsed = function markActivityUsed(id) {
  let date;
  const obj = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: date.getTime() };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  date = new Date();
  dispatch(obj);
};
export const updateFilter = function updateFilter(filter) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter };
  obj.dispatch(obj2);
};
