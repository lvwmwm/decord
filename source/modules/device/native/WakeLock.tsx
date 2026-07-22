// Module ID: 10593
// Function ID: 82662
// Name: useWakeLock
// Dependencies: []
// Exports: default

// Module 10593 (useWakeLock)
function useWakeLock(VoiceMessageOverlay) {
  const arg1 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = React.useEffect(() => {
    const obj = arg0(closure_2[2]);
    if (obj.isAndroid()) {
      const lock = callback(closure_2[3]).requestLock(arg0);
      const obj2 = callback(closure_2[3]);
    } else {
      const ScreenWakeLockManager = obj.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(arg0);
    }
    return () => {
      const obj = callback(closure_2[2]);
      if (obj.isAndroid()) {
        callback2(closure_2[3]).releaseLock(callback);
        const obj2 = callback2(closure_2[3]);
      } else {
        const ScreenWakeLockManager = obj.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(callback);
      }
    };
  }, items);
}
let closure_3 = importAll(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  useWakeLock(wakeLockKey.wakeLockKey);
  return null;
};
export { useWakeLock };
