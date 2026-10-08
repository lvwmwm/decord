// Module ID: 8807
// Function ID: 8808
// Name: SecureFramesBoundPairwiseFingerprint
// Dependencies: [5, 502, 5108, 8801, 206, 8785, 2]
// Exports: computeBoundPairwiseFingerprint

// Module 8807 (SecureFramesBoundPairwiseFingerprint)
import SecureFramesConstants from "SecureFramesConstants" /* 8801 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import size from "module_2" /* 2 */;

let c2, c3;

let value = function _computeBoundPairwiseFingerprint() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    function memoizedPairwiseFingerprint(id, secureFramesRosterMapEntry1, arg2, secureFramesRosterMapEntry) {
      const items = [closure_6, id, , , ];
      const fromByteArray = closure_1(closure_2[4]).fromByteArray;
      closure_1(closure_2[4]);
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry1);
      items[2] = fromByteArray(uint8Array);
      items[3] = arg2;
      const fromByteArray2 = closure_1(closure_2[4]).fromByteArray;
      closure_1(closure_2[4]);
      const uint8Array1 = new Uint8Array(secureFramesRosterMapEntry);
      items[4] = fromByteArray2(uint8Array1);
      const joined = items.join(":");
      let obj = map;
      const value2 = map.get(joined);
      const tmp2 = closure_2;
      if (null != value2) {
        return value2;
      } else {
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        const generatePairwiseFingerprint = joined(tmp2[5]).generatePairwiseFingerprint;
        const tmp13 = joined(tmp2[5]);
        const uint8Array2 = new Uint8Array(secureFramesRosterMapEntry1);
        const _Uint8Array2 = Uint8Array;
        const self3 = this;
        const self4 = this;
        const uint8Array3 = new Uint8Array(secureFramesRosterMapEntry);
        const pairwiseFingerprint = generatePairwiseFingerprint(tmp, uint8Array2, id, uint8Array3, arg2);
        const nextPromise = pairwiseFingerprint.then((result) => {
          const obj = closure_1_1(closure_1_2[4]);
          return obj.fromByteArray(result);
        });
        if (obj.size >= 16) {
          const iter = obj.keys();
          value = iter.next().value;
          if (null != value) {
            obj.delete(value);
          }
        }
        const result = obj.set(joined, nextPromise);
        nextPromise.catch(() => map.delete(joined));
        return nextPromise;
      }
    }
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let tmp13 = value;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let fingerprint;
          let secureFramesRosterMapEntry;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp16 = closure_0;
              fingerprint = undefined;
              id = id.getId();
              secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
              const secureFramesRosterMapEntry1 = RTCConnectionStore.getSecureFramesRosterMapEntry(id);
              if (null != secureFramesRosterMapEntry) {
                if (null != secureFramesRosterMapEntry1) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: memoizedPairwiseFingerprint(id, secureFramesRosterMapEntry1, tmp16, secureFramesRosterMapEntry), done: false };
                  return obj4;
                }
              }
              c3 = 3;
              return { value: null, done: true };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            fingerprint = value;
            value = { fingerprint, fingerprintUserKey: secureFramesRosterMapEntry };
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_6 = SecureFramesConstants.SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const map = new Map();
let result = size.fileFinishedImporting("modules/rtc/SecureFramesBoundPairwiseFingerprint.tsx");

export const computeBoundPairwiseFingerprint = function computeBoundPairwiseFingerprint() {
  return obj(...arguments);
};
