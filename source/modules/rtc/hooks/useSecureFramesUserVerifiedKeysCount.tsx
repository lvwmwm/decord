// Module ID: 8902
// Function ID: 70253
// Name: useSecureFramesUserVerifiedKeysCount
// Dependencies: []
// Exports: useSecureFramesUserVerifiedKeysCount

// Module 8902 (useSecureFramesUserVerifiedKeysCount)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

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
