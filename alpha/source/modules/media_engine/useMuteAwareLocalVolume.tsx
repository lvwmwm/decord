// Module ID: 9466
// Function ID: 9467
// Name: useMuteAwareLocalVolume
// Dependencies: [19, 1992, 504, 9093, 2]
// Exports: default

// Module 9466 (useMuteAwareLocalVolume)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9093 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let obj = { effectiveVolume: null, handleVolumeChange: null };
  const items = [MediaEngineStore];
  obj.effectiveVolume = require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!MediaEngineStore.isLocalMute(tmp, closure_1)) {
        num = obj.getLocalVolume(tmp, tmp2);
      }
      obj = MediaEngineStore;
      tmp2 = closure_1;
    }
    return num;
  });
  const items1 = [arg0, arg1];
  obj.handleVolumeChange = noop.useCallback((arg0) => {
    if (null != closure_0) {
      let isLocalMuteResult = arg0 > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = MediaEngineStore.isLocalMute(tmp, closure_1);
      }
      if (isLocalMuteResult) {
        AudioActionCreatorsDefault.toggleLocalMute(tmp, closure_1);
      }
      AudioActionCreatorsDefault.setLocalVolume(tmp, arg0, closure_1);
    }
  }, items1);
  return obj;
};
