// Module ID: 15763
// Function ID: 15764
// Name: StreamVolumeMovedStore
// Dependencies: [5505, 2]
// Exports: clearScrollToStreamVolume, clearStreamVolumeMovedHint, consumeStreamVolumeMovedHint, hideStreamVolumeCoachmark, showStreamVolumeCoachmark, showStreamVolumeMovedHint

// Module 15763 (StreamVolumeMovedStore)
import ZustandStore from "ZustandStore" /* 5505 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ hintStreamKey: null, scrollToStreamVolumeUserId: null, coachmarkUserId: null }));
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedStore.tsx");

export default zustandStore;
export function showStreamVolumeMovedHint(hintStreamKey) {
  const obj = { hintStreamKey, scrollToStreamVolumeUserId: null };
  zustandStore.setState(obj);
}
export function clearStreamVolumeMovedHint(arg0) {
  const obj = zustandStore;
  if (zustandStore.getState().hintStreamKey === arg0) {
    obj.setState({ hintStreamKey: null });
  }
}
export function consumeStreamVolumeMovedHint(arg0, scrollToStreamVolumeUserId) {
  const obj = zustandStore;
  if (zustandStore.getState().hintStreamKey === arg0) {
    const obj2 = { hintStreamKey: null, scrollToStreamVolumeUserId };
    obj.setState(obj2);
  }
}
export function clearScrollToStreamVolume() {
  zustandStore.setState({ scrollToStreamVolumeUserId: null });
}
export function showStreamVolumeCoachmark(coachmarkUserId) {
  const obj = { coachmarkUserId };
  zustandStore.setState(obj);
}
export function hideStreamVolumeCoachmark() {
  const obj = zustandStore;
  if (null != zustandStore.getState().coachmarkUserId) {
    obj.setState({ coachmarkUserId: null });
  }
}
