// Module ID: 10567
// Function ID: 10568
// Name: SecureFramesBoundPairwiseFingerprint
// Dependencies: [5, 502, 2130, 6008, 10561, 6012, 10545, 206, 2]
// Exports: computeBoundPairwiseFingerprint

// Module 10567 (SecureFramesBoundPairwiseFingerprint)
import byteLengthDefault from "byteLength" /* 206 */;
import Constants from "Constants" /* 6012 */;
import SecureFramesConstants from "SecureFramesConstants" /* 10561 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6008 */;
import size from "module_2" /* 2 */;

let c4, c5, id;

function memoizedPairwiseFingerprint(arg0, arg1, arg2, arg3) {
  const items = [closure_7, arg0, , , ];
  const fromByteArray = byteLengthDefault.fromByteArray;
  byteLengthDefault;
  let uint8Array = new Uint8Array(arg1);
  items[2] = fromByteArray(uint8Array);
  items[3] = arg2;
  const fromByteArray2 = byteLengthDefault.fromByteArray;
  byteLengthDefault;
  const uint8Array1 = new Uint8Array(arg3);
  items[4] = fromByteArray2(uint8Array1);
  const joined = items.join(":");
  obj = map;
  const value2 = map.get(joined);
  if (null != value2) {
    return value2;
  } else {
    let nextPromise;
    const obj3 = MediaEngineStore;
    if (MediaEngineStore.supports(Features.DAVE_PAIRWISE_FINGERPRINT)) {
      const mediaEngine = obj3.getMediaEngine();
      const davePairwiseFingerprint = mediaEngine.generateDavePairwiseFingerprint(tmp, arg1, arg0, arg3, arg2);
      nextPromise = davePairwiseFingerprint.then((result) => {
        const uint8Array = new Uint8Array(result);
        return uint8Array;
      });
    } else {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const generatePairwiseFingerprint = joined(10545).generatePairwiseFingerprint;
      const tmp10 = joined(10545);
      const uint8Array2 = new Uint8Array(arg1);
      const _Uint8Array2 = Uint8Array;
      const self3 = this;
      const self4 = this;
      const uint8Array3 = new Uint8Array(arg3);
      nextPromise = generatePairwiseFingerprint(tmp, uint8Array2, arg0, uint8Array3, arg2);
    }
    const nextPromise1 = nextPromise.then((result) => {
      obj = byteLengthDefault;
      return obj.fromByteArray(result);
    });
    if (obj.size >= 16) {
      const iter = obj.keys();
      const value = iter.next().value;
      if (null != value) {
        obj.delete(value);
      }
    }
    const result = obj.set(joined, nextPromise1);
    nextPromise1.catch(() => map.delete(joined));
    return nextPromise1;
  }
}
let obj = function _computeBoundPairwiseFingerprint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let secureFramesRosterMapEntry;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp3;
            id = id.getId();
            secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
            const secureFramesRosterMapEntry1 = RTCConnectionStore.getSecureFramesRosterMapEntry(id);
            if (null != secureFramesRosterMapEntry) {
              if (null != secureFramesRosterMapEntry1) {
                c3 = 1;
                value = {};
                c4 = 2;
                c5 = 1;
                const obj4 = { value: memoizedPairwiseFingerprint(id, secureFramesRosterMapEntry1, closure_0, secureFramesRosterMapEntry), done: false };
                return obj4;
              }
            }
            c5 = 3;
            return { value: null, done: true };
          }
        } else if (1 === c4) {
          c3 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          value.fingerprint = value;
          value.fingerprintUserKey = secureFramesRosterMapEntry;
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp13) {
        if (0 === c3) {
          c5 = 3;
          throw tmp13;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_7 = SecureFramesConstants.SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const Features = Constants.Features;
const map = new Map();
let result = size.fileFinishedImporting("modules/rtc/SecureFramesBoundPairwiseFingerprint.tsx");

export function computeBoundPairwiseFingerprint() {
  return obj(...arguments);
}
