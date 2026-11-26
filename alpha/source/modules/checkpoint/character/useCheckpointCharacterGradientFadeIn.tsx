// Module ID: 12846
// Function ID: 12847
// Name: useCheckpointCharacterGradientFadeIn
// Dependencies: [32, 19, 5044, 6396, 504, 6767, 12847, 2]
// Exports: useCheckpointCharacterGradientFadeIn

// Module 12846 (useCheckpointCharacterGradientFadeIn)
import _mod12847 from "module_12847" /* 12847 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap;

let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS: hasOwnProperty, CHECKPOINT_INTRODUCTION_REVEAL_DURATION_MS: metroRequire } = CheckpointConstants);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterGradientFadeIn.tsx");

export function useCheckpointCharacterGradientFadeIn(dataBinding) {
  let closure_3;
  let useReducedMotion;
  dataBinding = dataBinding.dataBinding;
  let first;
  react = undefined;
  const stage = dataBinding.stage;
  let obj = dataBinding(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2 = stage === dataBinding(6767).CheckpointCharacterStage.INTRODUCTION && !stateFromStores;
  dependencyMap = tmp2;
  let num = 1;
  let num2 = 1;
  const useState = react.useState;
  if (tmp2) {
    num2 = 0;
  }
  const tmp3 = first(useState(num2), 2);
  first = tmp3[0];
  react = tmp5;
  const tmp6 = first(react.useState(tmp2), 2);
  if (tmp2 !== tmp6[0]) {
    tmp6[1](tmp2);
    if (tmp2) {
      num = 0;
    }
    tmp3[1](num);
  }
  const items1 = [tmp2];
  const effect = obj2.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const _Date = Date;
      let closure_0 = Date.now() + closure_1_6;
      let _requestAnimationFrame = requestAnimationFrame;
      function handleAnimationFrame() {
        const bound = Math.max(Math.min(Date.now() - closure_0, hasOwnProperty), 0);
        const obj = _mod12847;
        closure_3(obj.easeOutCubic(bound, 0, 1, hasOwnProperty));
        if (bound < hasOwnProperty) {
          const _requestAnimationFrame = requestAnimationFrame;
          closure_1 = requestAnimationFrame(handleAnimationFrame);
        }
      }
      closure_1 = requestAnimationFrame(handleAnimationFrame);
      return () => cancelAnimationFrame(closure_1);
    }
  }, items1);
  const items2 = [dataBinding, first];
  return react.useMemo(() => {
    let obj;
    if (1 === first) {
      obj = dataBinding;
    } else {
      obj = { gradientTopOpacity: dataBinding.gradientTopOpacity * first, gradientBottomOpacity: dataBinding.gradientBottomOpacity * first, gradientLeftOpacity: dataBinding.gradientLeftOpacity * first, gradientRightOpacity: dataBinding.gradientRightOpacity * first };
      const merged = Object.assign(dataBinding);
    }
    return obj;
  }, items2);
}
