// Module ID: 9769
// Function ID: 9770
// Name: WakeLock
// Dependencies: [19, 9770, 2]
// Exports: default, useWakeLock

// Module 9769 (WakeLock)
import NativeScreenWakeLockModuleDefault from "NativeScreenWakeLockModule" /* 9770 */;
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
