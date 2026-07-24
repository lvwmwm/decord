// Module ID: 8944
// Function ID: 70498
// Name: useIsPersistentSecureFramesFingerprint
// Dependencies: [5, 57, 31, 4202, 8938, 566, 8936, 2]
// Exports: useIsPersistentSecureFramesFingerprint

// Module 8944 (useIsPersistentSecureFramesFingerprint)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SECURE_FRAMES_PUBLIC_KEY_VERSION as closure_6 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx");

export const useIsPersistentSecureFramesFingerprint = function useIsPersistentSecureFramesFingerprint(userId) {
  let _slicedToArray;
  let result;
  let tmp4;
  let tmp6;
  userId = userId.userId;
  const items = [callback];
  stateFromStores = userId(stateFromStores[5]).useStateFromStores(items, () => callback.getSecureFramesRosterMapEntry(userId));
  const loading = callback(React.useState(true), 2);
  let initialize = loading[1];
  const obj = userId(stateFromStores[5]);
  [tmp4, _slicedToArray] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  [tmp6, result] = callback(React.useState(false), 2);
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  const items1 = [stateFromStores, callback, userId];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      callback2(false);
      callback3(false);
      callback(false);
    } else {
      callback(userId, stateFromStores);
    }
  }, items1);
  return { loading: loading[0], isCurrentUserKeyPersistent, isOtherUserKeyPersistent };
};
