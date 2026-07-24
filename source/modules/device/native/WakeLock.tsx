// Module ID: 10632
// Function ID: 82904
// Name: useWakeLock
// Dependencies: [31, 27, 477, 10633, 2]
// Exports: default

// Module 10632 (useWakeLock)
import result from "result";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
function useWakeLock(VoiceMessageOverlay) {
  let closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = React.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = outer1_1(outer1_2[3]).requestLock(VoiceMessageOverlay);
      let obj2 = outer1_1(outer1_2[3]);
    } else {
      let ScreenWakeLockManager = outer1_4.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(VoiceMessageOverlay);
    }
    return () => {
      if (obj.isAndroid()) {
        outer2_1(outer2_2[3]).releaseLock(outer1_0);
        const obj2 = outer2_1(outer2_2[3]);
      } else {
        const ScreenWakeLockManager = outer2_4.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(outer1_0);
      }
    };
  }, items);
}
const result = require("set").fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  useWakeLock(wakeLockKey.wakeLockKey);
  return null;
};
export { useWakeLock };
