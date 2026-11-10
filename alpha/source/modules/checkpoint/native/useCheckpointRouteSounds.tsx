// Module ID: 13706
// Function ID: 13707
// Name: useCheckpointRouteSounds
// Dependencies: [19, 13681, 504, 13707, 11169, 2]
// Exports: default

// Module 13706 (useCheckpointRouteSounds)
import CheckpointSounds from "CheckpointSounds" /* 13707 */;
import react_mod from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13681 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let react = react_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointRouteSounds.tsx");

export default function useCheckpointRouteSounds() {
  let callback;
  let ref;
  let ref2;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [callback];
  stateFromStores = obj.useStateFromStores(items, () => callback.isMuted);
  dependencyMap = react.useRef([]);
  react = react.useRef(null);
  callback = react.useCallback(() => {
    const current = ref2.current;
    if (current != null) {
      current();
    }
    const current1 = ref.current;
    const item = current1.forEach((stop) => stop.stop());
    ref.current = [];
  }, []);
  const items1 = [callback];
  const effect = react.useEffect(() => callback, items1);
  const items2 = [stateFromStores, callback];
  const effect1 = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      callback();
    }
  }, items2);
  const items3 = [callback];
  return react.useCallback((arr) => {
    callback();
    let obj = CheckpointSounds;
    ref2.current = obj.scheduleCheckpointRouteSounds(arr, (stage_waiting) => {
      if (!callback.isMuted) {
        const obj = stateFromStores(ref[4]);
        const sound = obj.createSound(stage_waiting, "vibing_wumpus");
        const current = ref.current;
        current.push(sound);
        sound.play();
      }
    });
  }, items3);
};
