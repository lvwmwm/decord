// Module ID: 19426
// Function ID: 19427
// Name: DeviceSilentModeManager
// Dependencies: [6846, 6847, 572, 19427, 7287, 2]

// Module 19426 (DeviceSilentModeManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import react_nativeDefault from "react-native" /* 19427 */;
import FramesStore from "FramesStore" /* 6846 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
import size from "module_2" /* 2 */;

let _null, map;

function handleSilentModeChanged(muted) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_DEVICE_MUTED", muted };
  obj.dispatch(obj2);
}
function updateObserving() {
  const allFrames = FramesStore.getAllFrames();
  let someResult = allFrames.some(isLaunched);
  if (someResult) {
    if (null == _null) {
      const obj3 = react_nativeDefault;
      _null = obj3.onSilentModeChanged(handleSilentModeChanged);
      const obj4 = react_nativeDefault;
      obj4.startObserving();
    }
  }
  if (!someResult) {
    someResult = null == _null;
  }
  if (!someResult) {
    const obj2 = react_nativeDefault;
    obj2.stopObserving();
    _null.remove();
    _null = null;
  }
}
const isLaunched = FramesConstants.isLaunched;
const React3 = null;
class DeviceSilentModeManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { FRAME_LAUNCH: updateObserving };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(FramesStore, updateObserving);
    return applyArgumentsResult;
  }
  _initialize() {
    const allFrames = FramesStore.getAllFrames();
    let someResult = allFrames.some(isLaunched);
    if (someResult) {
      if (null == _null) {
        const obj3 = react_nativeDefault;
        _null = obj3.onSilentModeChanged(handleSilentModeChanged);
        const obj4 = react_nativeDefault;
        obj4.startObserving();
      }
    }
    if (!someResult) {
      someResult = null == _null;
    }
    if (!someResult) {
      const obj2 = react_nativeDefault;
      obj2.stopObserving();
      _null.remove();
      _null = null;
    }
  }
  _terminate() {
    if (null != _null) {
      const obj = react_nativeDefault;
      obj.stopObserving();
      _null.remove();
      _null = null;
    }
  }
}
const prototype = DeviceSilentModeManager.prototype;
const deviceSilentModeManager = new DeviceSilentModeManager();
const result = size.fileFinishedImporting("modules/frames/native/DeviceSilentModeManager.tsx");

export default deviceSilentModeManager;
