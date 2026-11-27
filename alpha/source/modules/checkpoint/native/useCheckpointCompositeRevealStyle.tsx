// Module ID: 12649
// Function ID: 12650
// Name: useCheckpointCompositeRevealStyle
// Dependencies: [19, 12639, 1654, 5253, 2]
// Exports: default

// Module 12649 (useCheckpointCompositeRevealStyle)
import _mod1654 from "module_1654" /* 1654 */;
import timing_timing from "timing/timing" /* 5253 */;
import react_mod from "react" /* 19 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12639 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let CHECKPOINT_COMPOSITE_REVEAL_EASING;
let c3;
let react = react_mod;
({ CHECKPOINT_COMPOSITE_REVEAL_DURATION_MS: c3, CHECKPOINT_COMPOSITE_REVEAL_EASING } = CheckpointTransitionConstants);
const Easing = _mod1654.Easing;
let items = [...CHECKPOINT_COMPOSITE_REVEAL_EASING];
let closure_4 = Easing.bezier.apply(items);
let closure_5 = { code: "(function useCheckpointCompositeRevealStyleTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCompositeRevealStyle.tsx");

export default function useCheckpointCompositeRevealStyle(status) {
  let current;
  let easing;
  let ref;
  let tmp7;
  let tmp8;
  let sharedValue;
  react = undefined;
  _require = tmp;
  let num = 0;
  const useSharedValue = require("module_1654").useSharedValue;
  const tmp2 = _require;
  const tmp3 = sharedValue;
  const tmp4 = require("module_1654");
  if ("loading" !== status.status) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  react = react.useRef(tmp);
  const items = [tmp, sharedValue];
  const effect = react.useEffect(() => {
    if (ref.current !== current) {
      ref.current = current;
      let num = 0;
      set = sharedValue.set;
      if (current) {
        const obj2 = { duration, easing };
        const obj = timing_timing;
        num = obj.withTiming(1, obj2);
      }
      const result = set(num);
    }
  }, items);
  const items1 = [closure_5, sharedValue];
  let c0;
  [tmp7, tmp8] = items1;
  function useCheckpointCompositeRevealStyleTsx1() {
    const obj = { opacity: _undefined.get() };
    return obj;
  }
  const items2 = [tmp8];
  useCheckpointCompositeRevealStyleTsx1.__closure = items2;
  useCheckpointCompositeRevealStyleTsx1.__workletHash = 13112346209478;
  useCheckpointCompositeRevealStyleTsx1.__initData = tmp7;
  const tmp2Result = tmp2(tmp3[2]);
  return tmp2Result.useAnimatedStyle(useCheckpointCompositeRevealStyleTsx1);
};
