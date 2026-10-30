// Module ID: 5685
// Function ID: 5686
// Name: DismissibleContentFrameworkActionCreators
// Dependencies: [4850, 572, 2]
// Exports: handleDCActioned, handleDCDismissed, handleDCShownToUser, overrideDCFLastDCDismissed, overrideDismissibleContentFramework, overrideNewUserMinAgeRequired, overrideUpsellBackoff, resetDismissibleContentFrameworkStore

// Module 5685 (DismissibleContentFrameworkActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4850 */;
import size from "module_2" /* 2 */;

const resetFatigueCooldown = DismissibleContentShownStateStore.resetFatigueCooldown;
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export function handleDCShownToUser(dismissibleContent, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId };
  obj.dispatch(obj2);
}
export function handleDCDismissed(dismissibleContent, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj2);
}
export function handleDCActioned(dismissibleContent) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_HANDLE_DC_ACTIONED", dismissibleContent };
  obj.dispatch(obj2);
}
export function resetDismissibleContentFrameworkStore() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DCF_RESET" });
}
export function overrideDismissibleContentFramework(value) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_DAILY_CAP_OVERRIDE", value };
  obj.dispatch(obj2);
}
export function overrideNewUserMinAgeRequired(value) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value };
  obj.dispatch(obj2);
}
export function overrideUpsellBackoff(value) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_UPSELL_BACKOFF_OVERRIDE", value };
  obj.dispatch(obj2);
  if (value) {
    resetFatigueCooldown();
  }
}
export function overrideDCFLastDCDismissed(dismissibleContent, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj2);
}
