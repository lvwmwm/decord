// Module ID: 15253
// Function ID: 15254
// Name: useCheckpointMusic
// Dependencies: [19, 17, 15246, 504, 9357, 15254, 2]
// Exports: default

// Module 15253 (useCheckpointMusic)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15246 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ useEffect: c3, useRef: closure_4 } = react);
const AppState = react_native.AppState;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointMusic.tsx");

export default function useCheckpointMusic() {
  let stateFromStores;
  const items = [CheckpointStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.isMuted);
  let ref = closure_4(null);
  let tmp2 = closure_3(() => {
    let closure_1;
    const createSound = stateFromStores(dependencyMap[4]).createSound;
    let num = 1;
    const tmp = stateFromStores(dependencyMap[4]);
    const tmp2 = ref(dependencyMap[5]);
    if (CheckpointStore.isMuted) {
      num = 0;
    }
    const sound = createSound(tmp2, "vibing_wumpus", num);
    ref.current = sound;
    sound.loop();
    ref = AppState.addEventListener("change", (event) => {
      if ("active" === event) {
        sound.play();
      } else {
        sound.pause();
      }
    });
    return () => {
      closure_1.remove();
      sound.stop();
      closure_1.current = null;
    };
  }, []);
  const items1 = [stateFromStores];
  closure_3(() => {
    if (null != ref.current) {
      let num = 1;
      const current = ref.current;
      if (stateFromStores) {
        num = 0;
      }
      current.volume = num;
    }
  }, items1);
};
