// Module ID: 14403
// Function ID: 108656
// Name: useSecureFramesUserVerifiedKeys
// Dependencies: []
// Exports: useSecureFramesUserVerifiedKeys

// Module 14403 (useSecureFramesUserVerifiedKeys)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  const arg1 = userId;
  const items = [closure_3];
  return arg1(dependencyMap[1]).useStateFromStoresArray(items, () => {
    const tmp = callback(closure_2[2]);
    const entries = callback(closure_2[2])(userVerifiedKeys.getUserVerifiedKeys(arg0)).entries();
    const mapped = entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { verifiedKey, timestamp };
    });
    const tmpResult = callback(closure_2[2])(userVerifiedKeys.getUserVerifiedKeys(arg0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
};
