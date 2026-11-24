// Module ID: 12447
// Function ID: 12448
// Name: useIsChangingCustomizationRoute
// Dependencies: [32, 19, 4918, 12431, 504, 6641, 2]
// Exports: default

// Module 12447 (useIsChangingCustomizationRoute)
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12431 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_5 = CheckpointTransitionConstants.CHECKPOINT_CHARACTER_STAGE_FADE;
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useIsChangingCustomizationRoute.tsx");

export default function useIsChangingCustomizationRoute(stepName) {
  let closure_1;
  let duration;
  let first;
  let first1;
  let tmp6;
  let useReducedMotion;
  let tmp = first1;
  const items = [AccessibilityStore];
  const obj = first1(504);
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [first, tmp6] = react.useState(stepName);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  first1 = tmp7[0];
  dependencyMap = tmp9;
  const obj2 = react;
  if (stepName !== first) {
    const tmpResult = tmp(6641);
    const result = tmpResult.isCheckpointCustomizationRoute(first);
    const tmpResult2 = tmp(6641);
    const result1 = tmpResult2.isCheckpointCustomizationRoute(stepName);
    tmp6(stepName);
    const tmp13 = !stateFromStores && result && result1;
    tmp7[1](tmp13);
  }
  const items1 = [first1, stepName];
  const effect = obj2.useEffect(() => {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1(false), duration.duration);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return first1;
};
