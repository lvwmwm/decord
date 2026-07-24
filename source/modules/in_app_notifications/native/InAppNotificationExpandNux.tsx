// Module ID: 10341
// Function ID: 79779
// Name: getExpandNUXState
// Dependencies: [587, 2]
// Exports: markExpandNUXStateAsShown, resetExpandNUXState

// Module 10341 (getExpandNUXState)
function getExpandNUXState() {
  const Storage = require(587) /* Storage */.Storage;
  let value = Storage.get(inAppNotificationExpandNux);
  if (null == value) {
    value = closure_3;
  }
  return value;
}
const inAppNotificationExpandNux = "inAppNotificationExpandNux";
let closure_3 = { lastShownAtMs: 0, numTimesShown: 0 };
let result = require("set").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandNux.tsx");

export const MAX_TIMES_SHOWN = 7;
export const ONE_DAY_MS = 86400000;
export const NUX_REVEAL_DELAY_MS = 1000;
export const NUX_REVEAL_DURATION_MS = 300;
export const DRAG_HANDLE_BOUNCE_DISTANCE = 4;
export const DRAG_HANDLE_BOUNCE_DURATION_MS = 650;
export { getExpandNUXState };
export const markExpandNUXStateAsShown = function markExpandNUXStateAsShown() {
  const tmp = getExpandNUXState();
  const Storage = require(587) /* Storage */.Storage;
  const obj = {};
  const merged = Object.assign(tmp);
  obj["numTimesShown"] = tmp.numTimesShown + 1;
  obj["lastShownAtMs"] = Date.now();
  const result = Storage.set(inAppNotificationExpandNux, obj);
};
export const resetExpandNUXState = function resetExpandNUXState() {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(inAppNotificationExpandNux, closure_3);
};
