// Module ID: 10747
// Function ID: 83520
// Name: useMuteAwareLocalVolume
// Dependencies: [31, 4177, 566, 8843, 2]
// Exports: default

// Module 10747 (useMuteAwareLocalVolume)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = {};
  const items = [_isNativeReflectConstruct];
  obj.effectiveVolume = _require(566).useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!outer1_4.isLocalMute(closure_0, closure_1)) {
        num = outer1_4.getLocalVolume(closure_0, closure_1);
      }
    }
    return num;
  });
  const items1 = [arg0, arg1];
  obj.handleVolumeChange = React.useCallback((volume) => {
    if (null != closure_0) {
      let isLocalMuteResult = volume > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = outer1_4.isLocalMute(closure_0, callback);
      }
      if (isLocalMuteResult) {
        callback(outer1_2[3]).toggleLocalMute(closure_0, callback);
        const obj = callback(outer1_2[3]);
      }
      callback(outer1_2[3]).setLocalVolume(closure_0, volume, callback);
      const obj2 = callback(outer1_2[3]);
    }
  }, items1);
  return obj;
};
