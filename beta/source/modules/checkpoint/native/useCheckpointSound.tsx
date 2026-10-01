// Module ID: 15251
// Function ID: 15252
// Name: useCheckpointSound
// Dependencies: [19, 15246, 504, 9357, 2]
// Exports: default

// Module 15251 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 9357 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15246 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
let closure_4;
({ useCallback: c2, useEffect: c3, useRef: closure_4 } = react);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default function useCheckpointSound(arg0) {
  let closure_0;
  let isMuted;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [CheckpointStore];
  stateFromStores = obj.useStateFromStores(items, () => isMuted.isMuted);
  const ref = closure_4(null);
  const tmp2 = closure_3(() => () => {
    const current = ref.current;
    let stopResult;
    if (current != null) {
      stopResult = current.stop();
    }
    return stopResult;
  }, []);
  const items1 = [stateFromStores, arg0];
  return ref(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
      const obj = SoundUtils;
      ref.current = obj.createSound(closure_0, "vibing_wumpus");
      const current2 = tmp2.current;
      current2.play();
    }
  }, items1);
};
