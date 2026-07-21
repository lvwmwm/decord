// Module ID: 8897
// Function ID: 70218
// Name: useIsPersistentSecureFramesFingerprint
// Dependencies: []
// Exports: useIsPersistentSecureFramesFingerprint

// Module 8897 (useIsPersistentSecureFramesFingerprint)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).SECURE_FRAMES_PUBLIC_KEY_VERSION;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx");

export const useIsPersistentSecureFramesFingerprint = function useIsPersistentSecureFramesFingerprint(userId) {
  let tmp4;
  let tmp6;
  userId = userId.userId;
  const arg1 = userId;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => callback.getSecureFramesRosterMapEntry(userId));
  const dependencyMap = stateFromStores;
  const loading = callback(React.useState(true), 2);
  let closure_2 = loading[1];
  const obj = arg1(dependencyMap[5]);
  [tmp4, closure_3] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  [tmp6, closure_4] = callback(React.useState(false), 2);
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), []);
  closure_5 = callback;
  const items1 = [stateFromStores, callback, userId];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      callback2(false);
      callback3(false);
      callback(false);
    } else {
      callback(userId, stateFromStores);
    }
  }, items1);
  return { loading: loading[0], isCurrentUserKeyPersistent, isOtherUserKeyPersistent };
};
