// Module ID: 9118
// Function ID: 9119
// Name: WakeLock
// Dependencies: [19, 9119, 2]
// Exports: default, useWakeLock

// Module 9118 (WakeLock)
import NativeScreenWakeLockModuleDefault from "NativeScreenWakeLockModule" /* 9119 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = noop.useEffect(() => {
    const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    return () => {
      wakeLockKey(dependencyMap[1]).releaseLock(closure_1_0);
    };
  }, items);
  return null;
};
export const useWakeLock = function useWakeLock(VoiceMessageOverlay) {
  closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = noop.useEffect(() => {
    const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    return () => {
      wakeLockKey(dependencyMap[1]).releaseLock(closure_1_0);
    };
  }, items);
};
