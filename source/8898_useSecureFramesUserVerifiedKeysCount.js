// Module ID: 8898
// Function ID: 70241
// Name: useSecureFramesUserVerifiedKeysCount
// Dependencies: [0, 0, 0, 0, 0]
// Exports: useSecureFramesUserVerifiedKeysCount

// Module 8898 (useSecureFramesUserVerifiedKeysCount)
import closure_2 from "result";
import closure_3 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

export const useSecureFramesUserVerifiedKeysCount = function useSecureFramesUserVerifiedKeysCount(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const keyToOmit = userId.keyToOmit;
  const dependencyMap = keyToOmit;
  const items = [keyToOmit];
  const memo = React.useMemo(() => {
    if (null == keyToOmit) {
      return null;
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(keyToOmit);
      return userId(keyToOmit[2]).serializeKey(uint8Array);
    }
  }, items);
  const React = memo;
  const items1 = [closure_3];
  const items2 = [memo, userId];
  return arg1(dependencyMap[3]).useStateFromStores(items1, () => {
    const userVerifiedKeys = userVerifiedKeys.getUserVerifiedKeys(userId);
    let num = 0;
    if (null != userVerifiedKeys) {
      const _Object = Object;
      const keys = Object.keys(userVerifiedKeys);
      num = keys.filter((arg0) => arg0 !== closure_2).length;
    }
    return num;
  }, items2);
};
