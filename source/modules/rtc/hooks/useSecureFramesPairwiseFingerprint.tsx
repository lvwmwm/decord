// Module ID: 8896
// Function ID: 70224
// Name: useSecureFramesPairwiseFingerprint
// Dependencies: []
// Exports: useSecureFramesPairwiseFingerprint

// Module 8896 (useSecureFramesPairwiseFingerprint)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const Features = arg1(dependencyMap[7]).Features;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export const useSecureFramesPairwiseFingerprint = function useSecureFramesPairwiseFingerprint(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => stateFromStores1.getId());
  const importDefault = stateFromStores;
  importDefault(dependencyMap[9])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  let closure_3 = tmp3[1];
  const tmp5 = callback(React.useState(false), 2);
  const first1 = tmp5[0];
  let callback = first1;
  const React = tmp5[1];
  const obj = arg1(dependencyMap[8]);
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => callback.getSecureFramesRosterMapEntry(userId));
  closure_6 = stateFromStores1;
  const obj2 = arg1(dependencyMap[8]);
  const items2 = [closure_8];
  const stateFromStores2 = arg1(dependencyMap[8]).useStateFromStores(items2, () => callback.getSecureFramesRosterMapEntry(stateFromStores));
  let closure_7 = stateFromStores2;
  callback = React.useCallback((arg0) => {
    callback(stateFromStores(first[10]).fromByteArray(arg0));
    callback2(false);
  }, []);
  closure_8 = callback;
  const items3 = [callback];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items3);
  let closure_9 = callback1;
  let closure_10 = React.useRef(null);
  const items4 = [stateFromStores, stateFromStores2, callback1, userId, stateFromStores1];
  const effect = React.useEffect(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      tmp = null == ref.current;
    }
    if (tmp) {
      callback2(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => callback(closure_1, closure_7, current, closure_6), 0);
    }
    const userId = ref.current;
    return () => {
      if (null != current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(current);
      }
    };
  }, items4);
  const items5 = [first, first1, stateFromStores1];
  return React.useMemo(() => ({ fingerprint: first, userKey: stateFromStores1, loading: first1 }), items5);
};
