// Module ID: 11799
// Function ID: 11800
// Name: WakeLock
// Dependencies: [19, 11800, 2]
// Exports: default, useWakeLock

// Module 11799 (WakeLock)
import react_nativeDefault from "react-native" /* 11800 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = react.useEffect(() => {
    let obj = react_nativeDefault;
    const lock = obj.requestLock(wakeLockKey);
    return () => {
      const obj = wakeLockKey(dependencyMap[1]);
      obj.releaseLock(closure_1_0);
    };
  }, items);
  return null;
};
export function useWakeLock(VoiceMessageOverlay) {
  let closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = react.useEffect(() => {
    let obj = react_nativeDefault;
    const lock = obj.requestLock(wakeLockKey);
    return () => {
      const obj = wakeLockKey(dependencyMap[1]);
      obj.releaseLock(closure_1_0);
    };
  }, items);
}
