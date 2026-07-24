// Module ID: 11970
// Function ID: 92574
// Name: useTrackUserProfileActivityView
// Dependencies: [57, 31, 8731, 566, 2]
// Exports: default

// Module 11970 (useTrackUserProfileActivityView)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_3;
let closure_4;
const require = arg1;
({ useEffect: closure_3, useState: closure_4 } = result);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default function useTrackUserProfileActivityView(arg0) {
  let onAction;
  let require;
  ({ userId: require, onAction } = arg0);
  let callback2;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(onAction[3]).useStateFromStores(items, () => outer1_5.isFetchingUserOutbox(closure_0));
  const tmp2 = callback(callback3(false), 2);
  callback = tmp2[1];
  callback2 = tmp3;
  const items1 = [!stateFromStores && !tmp2[0], onAction];
  callback2(() => {
    if (c3) {
      const obj = { action: "VIEW_ACTIVITY_CARD" };
      onAction(obj);
      callback(true);
    }
  }, items1);
};
