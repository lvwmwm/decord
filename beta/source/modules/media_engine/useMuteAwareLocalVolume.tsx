// Module ID: 9477
// Function ID: 9478
// Name: useMuteAwareLocalVolume
// Dependencies: [19, 1993, 504, 9104, 2]
// Exports: default

// Module 9477 (useMuteAwareLocalVolume)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  let closure_0;
  let items;
  let items1;
  let obj2;
  _require = arg0;
  let closure_1 = arg1;
  let obj = {
    effectiveVolume: obj2.useStateFromStores(items, () => {
      let num = 0;
      if (null != closure_0) {
        num = 0;
        const obj = MediaEngineStore;
        const tmp2 = closure_1;
        if (!MediaEngineStore.isLocalMute(closure_0, closure_1)) {
          num = obj.getLocalVolume(tmp, tmp2);
        }
      }
      return num;
    }),
    handleVolumeChange: react.useCallback((arg0) => {
      if (null != closure_0) {
        const isLocalMuteResult = arg0 > 0 && MediaEngineStore.isLocalMute(tmp, closure_1);
        if (isLocalMuteResult) {
          const obj = AudioActionCreatorsDefault;
          obj.toggleLocalMute(closure_0, closure_1);
        }
        const obj2 = AudioActionCreatorsDefault;
        obj2.setLocalVolume(closure_0, arg0, closure_1);
      }
    }, items1)
  };
  obj2 = require("get initialized");
  items = [MediaEngineStore];
  items1 = [arg0, arg1];
  return obj;
};
