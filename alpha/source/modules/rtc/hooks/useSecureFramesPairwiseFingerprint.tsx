// Module ID: 10633
// Function ID: 10634
// Name: useSecureFramesPairwiseFingerprint
// Dependencies: [32, 19, 502, 6071, 504, 38, 10634, 2]
// Exports: useSecureFramesPairwiseFingerprint

// Module 10633 (useSecureFramesPairwiseFingerprint)
import SecureFramesBoundPairwiseFingerprint from "SecureFramesBoundPairwiseFingerprint" /* 10634 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const SecureFramesPairwiseFingerprintMode = { FROZEN: "frozen", LIVE: "live" };
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export { SecureFramesPairwiseFingerprintMode };
export function useSecureFramesPairwiseFingerprint(userId) {
  let closure_4;
  let stateFromStores1;
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (FROZEN === undefined) {
    let tmp = stateFromStores1;
    FROZEN = stateFromStores1.FROZEN;
  }
  let stateFromStores;
  let first;
  react = undefined;
  let first1;
  let obj = userId(stateFromStores[4]);
  const items = [first1];
  stateFromStores = obj.useStateFromStores(items, () => first1.getId());
  const tmp3 = FROZEN(stateFromStores[5])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp4 = first(react.useState(null), 2);
  first = tmp4[0];
  react = tmp4[1];
  const tmp6 = first(react.useState(false), 2);
  first1 = tmp6[0];
  let closure_6 = tmp6[1];
  const items1 = [closure_6];
  const obj2 = userId(stateFromStores[4]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => RTCConnectionStore.getSecureFramesRosterMapEntry(userId));
  const items2 = [closure_6];
  const obj3 = userId(stateFromStores[4]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores));
  const items3 = [userId];
  const callback = react.useCallback(() => {
    const obj = SecureFramesBoundPairwiseFingerprint;
    return obj.computeBoundPairwiseFingerprint(userId);
  }, items3);
  const ref = react.useRef(0);
  let closure_11 = react.useRef(null);
  const ref2 = react.useRef(false);
  const items4 = [FROZEN, callback, stateFromStores1, stateFromStores2];
  const effect = react.useEffect(() => {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        if (FROZEN !== stateFromStores1.FROZEN) {
          ref2.current = true;
          const sum = ref.current + 1;
          ref.current = sum;
          userId = sum;
          const _setTimeout = setTimeout;
          closure_11.current = setTimeout(() => {
            closure_6(true);
            const promise = callback();
            promise.then((result) => {
              if (closure_1_0 === ref.current) {
                if (null != result) {
                  closure_2_4(result);
                }
                closure_2_6(false);
              }
            });
          }, 0);
        }
      }
    }
  }, items4);
  const effect1 = react.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
  }, []);
  const items5 = [first, first1];
  return react.useMemo(() => {
    let fingerprintUserKey;
    let fingerprint;
    if (first != null) {
      fingerprint = tmp.fingerprint;
    }
    if (fingerprint == null) {
      fingerprint = null;
    }
    const obj = { fingerprint, fingerprintUserKey, loading: first1 };
    fingerprintUserKey = undefined;
    if (first != null) {
      fingerprintUserKey = tmp.fingerprintUserKey;
    }
    if (fingerprintUserKey == null) {
      fingerprintUserKey = null;
    }
    return obj;
  }, items5);
}
