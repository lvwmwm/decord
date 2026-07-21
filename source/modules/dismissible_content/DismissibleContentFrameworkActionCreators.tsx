// Module ID: 12873
// Function ID: 98327
// Name: handleDCShownToUser
// Dependencies: []
// Exports: handleDCDismissed, handleDCShownToUser, overrideDCFLastDCDismissed, overrideDismissibleContentFramework, overrideNewUserMinAgeRequired, resetDismissibleContentFrameworkStore

// Module 12873 (handleDCShownToUser)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export const handleDCShownToUser = function handleDCShownToUser(dismissibleContent, guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId };
  obj.dispatch(obj);
};
export const handleDCDismissed = function handleDCDismissed(dismissibleContent, guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj);
};
export const resetDismissibleContentFrameworkStore = function resetDismissibleContentFrameworkStore() {
  importDefault(dependencyMap[0]).dispatch({ type: "DCF_RESET" });
};
export const overrideDismissibleContentFramework = function overrideDismissibleContentFramework(value) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DCF_DAILY_CAP_OVERRIDE", value };
  obj.dispatch(obj);
};
export const overrideNewUserMinAgeRequired = function overrideNewUserMinAgeRequired(value) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value };
  obj.dispatch(obj);
};
export const overrideDCFLastDCDismissed = function overrideDCFLastDCDismissed(dismissibleContent, guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj);
};
