// Module ID: 9169
// Function ID: 9170
// Name: useSecureFramesPairwiseFingerprint
// Dependencies: [32, 5, 19, 502, 1993, 4859, 9165, 4861, 206, 504, 38, 9170, 2]
// Exports: useSecureFramesPairwiseFingerprint

// Module 9169 (useSecureFramesPairwiseFingerprint)
import Constants from "Constants" /* 4861 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9165 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import size from "module_2" /* 2 */;

let c3, c4, constants, obj;

let SecureFramesPairwiseFingerprintMode = function _computeNativeDisplayPair() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_3;
        let secureFramesRosterMapEntry;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp3;
            let c1 = 0;
            closure_3 = undefined;
            secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
            const rTCConnection = RTCConnectionStore.getRTCConnection();
            if (null != secureFramesRosterMapEntry) {
              if (null != rTCConnection) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => {
                  closure_0 = arg0;
                  const mLSPairwiseFingerprint = rTCConnection.getMLSPairwiseFingerprint(closure_2_9, closure_0, (arg0) => {
                    const uint8Array = new Uint8Array(arg0);
                    return closure_0(uint8Array);
                  });
                });
                c3 = 1;
                c4 = 1;
                const obj5 = { value: promise, done: false };
                return obj5;
              }
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_3 = value;
          value = { fingerprint: obj2.fromByteArray(closure_3), fingerprintUserKey: secureFramesRosterMapEntry };
          obj2 = closure_130_1(closure_130_2[8]);
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let closure_9 = SecureFramesConstants.SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const Features = Constants.Features;
SecureFramesPairwiseFingerprintMode = { FROZEN: "frozen", LIVE: "live" };
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export { SecureFramesPairwiseFingerprintMode };
export const useSecureFramesPairwiseFingerprint = function useSecureFramesPairwiseFingerprint(userId) {
  let closure_4;
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (FROZEN === undefined) {
    let tmp = constants;
    FROZEN = constants.FROZEN;
  }
  let stateFromStores;
  let first;
  let first1;
  let id;
  let stateFromStores2;
  obj = userId(stateFromStores[9]);
  const items = [id];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp3 = FROZEN(stateFromStores[10])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp4 = first(first1.useState(null), 2);
  first = tmp4[0];
  _asyncToGenerator = tmp4[1];
  const tmp6 = first(first1.useState(false), 2);
  first1 = tmp6[0];
  id = tmp6[1];
  let obj2 = userId(stateFromStores[9]);
  const items1 = [stateFromStores2];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => RTCConnectionStore.getSecureFramesRosterMapEntry(userId));
  let obj3 = userId(stateFromStores[9]);
  const items2 = [stateFromStores2];
  stateFromStores2 = obj3.useStateFromStores(items2, () => RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores));
  const items3 = [userId];
  const callback = first1.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v3;
    function computeNativeDisplayPair() {
      return closure_1_12(...arguments);
    }
    if (userId === 2) {
      userId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        userId = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            userId = 3;
            throw value;
          } else if (arg0 === 2) {
            userId = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (stateFromStores1.supports(constants.MLS_PAIRWISE_FINGERPRINTS)) {
            c1 = 2;
            userId = 1;
            const obj5 = { value: computeNativeDisplayPair(userId), done: false };
            return obj5;
          } else {
            c1 = 1;
            const obj4 = userId(stateFromStores[11]);
            userId = 1;
            const obj6 = { value: obj4.computeBoundPairwiseFingerprint(userId), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp3) {
            if (arg0 === 1) {
              userId = 3;
              throw value;
            } else if (arg0 === 2) {
              userId = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            userId = 3;
            throw value;
          } else if (arg0 === 2) {
            userId = 3;
            obj = { value, done: true };
            return obj;
          }
          userId = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp8) {
        userId = 3;
        throw tmp8;
      }
    }
  }), items3);
  const ref = first1.useRef(0);
  constants = first1.useRef(null);
  const ref2 = first1.useRef(false);
  const items4 = [FROZEN, callback, stateFromStores1, stateFromStores2];
  const effect = first1.useEffect(() => {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        if (FROZEN !== constants.FROZEN) {
          ref2.current = true;
          const sum = ref.current + 1;
          ref.current = sum;
          userId = sum;
          const _setTimeout = setTimeout;
          constants.current = setTimeout(() => {
            id(true);
            const promise = callback();
            promise.then((result) => {
              if (closure_1_0 === ref.current) {
                if (null != result) {
                  closure_2_4(result);
                }
                id(false);
              }
            });
          }, 0);
        }
      }
    }
  }, items4);
  const effect1 = first1.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
  }, []);
  const items5 = [first, first1];
  return first1.useMemo(() => {
    let fingerprintUserKey;
    let fingerprint;
    if (first != null) {
      fingerprint = tmp.fingerprint;
    }
    if (fingerprint == null) {
      fingerprint = null;
    }
    obj = { fingerprint, fingerprintUserKey, loading: first1 };
    fingerprintUserKey = undefined;
    if (first != null) {
      fingerprintUserKey = tmp.fingerprintUserKey;
    }
    if (fingerprintUserKey == null) {
      fingerprintUserKey = null;
    }
    return obj;
  }, items5);
};
