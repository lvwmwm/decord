// Module ID: 10817
// Function ID: 83991
// Name: toggleUseActivityUrlOverride
// Dependencies: []
// Exports: markActivityUsed, setActivityUrlOverride, toggleUseActivityUrlOverride, updateFilter

// Module 10817 (toggleUseActivityUrlOverride)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export const toggleUseActivityUrlOverride = function toggleUseActivityUrlOverride() {
  importDefault(dependencyMap[0]).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
};
export const setActivityUrlOverride = function setActivityUrlOverride(activityUrlOverride) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride };
  obj.dispatch(obj);
};
export const markActivityUsed = function markActivityUsed(id) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: new Date().getTime() };
  obj.dispatch(obj);
};
export const updateFilter = function updateFilter(filter) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter };
  obj.dispatch(obj);
};
