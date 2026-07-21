// Module ID: 10298
// Function ID: 79502
// Name: getExpandNUXState
// Dependencies: []
// Exports: markExpandNUXStateAsShown, resetExpandNUXState

// Module 10298 (getExpandNUXState)
function getExpandNUXState() {
  const Storage = require(dependencyMap[0]).Storage;
  let value = Storage.get(closure_2);
  if (null == value) {
    value = closure_3;
  }
  return value;
}
let closure_2 = "inAppNotificationExpandNux";
let closure_3 = { ./shared/errors: -536870861, @braintree/wrap-promise: -299892737 };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandNux.tsx");

export const MAX_TIMES_SHOWN = 7;
export const ONE_DAY_MS = 86400000;
export const NUX_REVEAL_DELAY_MS = 1000;
export const NUX_REVEAL_DURATION_MS = 300;
export const DRAG_HANDLE_BOUNCE_DISTANCE = 4;
export const DRAG_HANDLE_BOUNCE_DURATION_MS = 650;
export { getExpandNUXState };
export const markExpandNUXStateAsShown = function markExpandNUXStateAsShown() {
  const tmp = getExpandNUXState();
  const Storage = require(dependencyMap[0]).Storage;
  const obj = {};
  const merged = Object.assign(tmp);
  obj["numTimesShown"] = tmp.numTimesShown + 1;
  obj["lastShownAtMs"] = Date.now();
  const result = Storage.set(closure_2, obj);
};
export const resetExpandNUXState = function resetExpandNUXState() {
  const Storage = require(dependencyMap[0]).Storage;
  const result = Storage.set(closure_2, closure_3);
};
