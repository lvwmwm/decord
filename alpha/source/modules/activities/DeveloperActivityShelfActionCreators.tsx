// Module ID: 12118
// Function ID: 12119
// Name: DeveloperActivityShelfActionCreators
// Dependencies: [584, 2]
// Exports: markActivityUsed, setActivityUrlOverride, toggleUseActivityUrlOverride, updateFilter

// Module 12118 (DeveloperActivityShelfActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export function toggleUseActivityUrlOverride() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
}
export function setActivityUrlOverride(activityUrlOverride) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride };
  obj.dispatch(obj2);
}
export function markActivityUsed(id) {
  let date;
  const obj = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: date.getTime() };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  date = new Date();
  dispatch(obj);
}
export function updateFilter(filter) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter };
  obj.dispatch(obj2);
}
