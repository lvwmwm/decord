// Module ID: 14395
// Function ID: 14396
// Name: useCheckpointSound
// Dependencies: [19, 14146, 504, 10964, 2]
// Exports: default

// Module 14395 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 10964 */;
import react_mod from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default function useCheckpointSound(arg0) {
  let closure_0;
  let isMuted;
  let ref;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [CheckpointStore];
  stateFromStores = obj.useStateFromStores(items, () => isMuted.isMuted);
  react = react.useRef(null);
  const effect = react.useEffect(() => () => {
    const current = ref.current;
    let stopResult;
    if (current != null) {
      stopResult = current.stop();
    }
    return stopResult;
  }, []);
  const items1 = [stateFromStores];
  const effect1 = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
    }
  }, items1);
  const items2 = [stateFromStores, arg0];
  return react.useCallback(() => {
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
  }, items2);
};
