// Module ID: 12033
// Function ID: 12034
// Name: WakeLock
// Dependencies: [19, 12034, 2]
// Exports: default, useWakeLock

// Module 12033 (WakeLock)
import react_nativeDefault from "react-native" /* 12034 */;
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
