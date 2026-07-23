// Module ID: 8903
// Function ID: 70265
// Name: useSecureFramesPairwiseFingerprint
// Dependencies: [5, 57, 31, 1194, 4177, 4202, 8899, 4191, 566, 44, 206, 8882, 2]
// Exports: useSecureFramesPairwiseFingerprint

// Module 8903 (useSecureFramesPairwiseFingerprint)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION as closure_9 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import { Features } from "DesktopSources";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export const useSecureFramesPairwiseFingerprint = function useSecureFramesPairwiseFingerprint(userId) {
  userId = userId.userId;
  const items = [stateFromStores1];
  const stateFromStores = userId(first[8]).useStateFromStores(items, () => stateFromStores1.getId());
  stateFromStores(first[9])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp3 = first1(React.useState(null), 2);
  first = tmp3[0];
  let _isNativeReflectConstruct = tmp3[1];
  const tmp5 = first1(React.useState(false), 2);
  first1 = tmp5[0];
  React = tmp5[1];
  const obj = userId(first[8]);
  const items1 = [callback];
  stateFromStores1 = userId(first[8]).useStateFromStores(items1, () => callback.getSecureFramesRosterMapEntry(userId));
  const obj2 = userId(first[8]);
  const items2 = [callback];
  const stateFromStores2 = userId(first[8]).useStateFromStores(items2, () => callback.getSecureFramesRosterMapEntry(stateFromStores));
  callback = React.useCallback((arg0) => {
    callback(stateFromStores(first[10]).fromByteArray(arg0));
    callback2(false);
  }, []);
  const items3 = [callback];
  const callback1 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items3);
  let closure_10 = React.useRef(null);
  const items4 = [stateFromStores, stateFromStores2, callback1, userId, stateFromStores1];
  const effect = React.useEffect(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      tmp = null == ref.current;
    }
    if (tmp) {
      callback2(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => outer1_9(outer1_1, outer1_7, current, outer1_6), 0);
    }
    const current = ref.current;
    return () => {
      if (null != current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(current);
      }
    };
  }, items4);
  const items5 = [first, first1, stateFromStores1];
  return React.useMemo(() => ({ fingerprint: first, userKey: stateFromStores1, loading: first1 }), items5);
};
