// Module ID: 9978
// Function ID: 9979
// Name: useReadableSecureFramesFingerprint
// Dependencies: [19, 206, 9955, 2]
// Exports: useReadableSecureFramesFingerprint

// Module 9978 (useReadableSecureFramesFingerprint)
import byteLengthDefault from "byteLength" /* 206 */;
import _mod9955 from "module_9955" /* 9955 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx");

export const useReadableSecureFramesFingerprint = function useReadableSecureFramesFingerprint(fingerprintBase64) {
  fingerprintBase64 = fingerprintBase64.fingerprintBase64;
  const chunkSize = fingerprintBase64.chunkSize;
  const desiredLength = fingerprintBase64.desiredLength;
  const items = [chunkSize, fingerprintBase64, desiredLength];
  const memo = noop.useMemo(() => {
    if (null != fingerprintBase64) {
      if ("" !== tmp) {
        const toByteArrayResult = byteLengthDefault.toByteArray(tmp);
        const str5 = _mod9955.generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
        if (null == str5) {
          return null;
        } else {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          const regExp = new RegExp(".{1," + tmp14 + "}", "g");
          const match = str5.match(regExp);
          let arr = null;
          if (null != match) {
            const _Array = Array;
            arr = Array.from(match);
          }
          return arr;
        }
        tmp14 = chunkSize;
      }
    }
    return null;
  }, items);
  if (null != fingerprintBase64) {
    if ("" !== fingerprintBase64) {
      if (null == memo) {
        const _Error = Error;
        const error = new Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
        throw error;
      }
    }
  }
  return memo;
};
