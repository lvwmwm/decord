// Module ID: 9278
// Function ID: 9279
// Name: useSecureFramesUserVerifiedKeysCount
// Dependencies: [19, 9249, 9250, 504, 2]
// Exports: useSecureFramesUserVerifiedKeysCount

// Module 9278 (useSecureFramesUserVerifiedKeysCount)
import _mod9250 from "module_9250" /* 9250 */;
import react from "react" /* 19 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9249 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

export function useSecureFramesUserVerifiedKeysCount(userId) {
  userId = userId.userId;
  const keyToOmit = userId.keyToOmit;
  let memo;
  const items = [keyToOmit];
  memo = memo.useMemo(function() {
    if (null == keyToOmit) {
      return null;
    } else {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(tmp);
      const obj = _mod9250;
      return obj.serializeKey(uint8Array);
    }
  }, items);
  let obj = userId(keyToOmit[3]);
  const items1 = [VerifiedKeyStore];
  const items2 = [memo, userId];
  return obj.useStateFromStores(items1, () => {
    const userVerifiedKeys = VerifiedKeyStore.getUserVerifiedKeys(userId);
    let num = 0;
    if (null != userVerifiedKeys) {
      const _Object = Object;
      const keys = Object.keys(userVerifiedKeys);
      num = keys.filter((item) => item !== memo).length;
    }
    return num;
  }, items2);
}
