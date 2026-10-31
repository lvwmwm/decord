// Module ID: 9273
// Function ID: 9274
// Name: useReadableSecureFramesFingerprint
// Dependencies: [19, 206, 9250, 2]
// Exports: useReadableSecureFramesFingerprint

// Module 9273 (useReadableSecureFramesFingerprint)
import byteLengthDefault from "byteLength" /* 206 */;
import _mod9250 from "module_9250" /* 9250 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx");

export function useReadableSecureFramesFingerprint(fingerprintBase64) {
  fingerprintBase64 = fingerprintBase64.fingerprintBase64;
  const chunkSize = fingerprintBase64.chunkSize;
  const desiredLength = fingerprintBase64.desiredLength;
  const items = [chunkSize, fingerprintBase64, desiredLength];
  const memo = react.useMemo(function() {
    if (null != fingerprintBase64) {
      if ("" !== fingerprintBase64) {
        const obj = byteLengthDefault;
        const toByteArrayResult = obj.toByteArray(fingerprintBase64);
        const obj2 = _mod9250;
        const str5 = obj2.generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
        const tmp12 = chunkSize;
        if (null == str5) {
          return null;
        } else {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const regExp = new RegExp(".{1," + tmp12 + "}", "g");
          const match = str5.match(regExp);
          let arr = null;
          if (null != match) {
            const _Array = Array;
            arr = Array.from(match);
          }
          return arr;
        }
      }
    }
    return null;
  }, items);
  if (null != fingerprintBase64) {
    if ("" !== fingerprintBase64) {
      if (null == memo) {
        const _Error = Error;
        let self = this;
        let self2 = this;
        const error = new Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
        throw error;
      }
    }
  }
  return memo;
}
