// Module ID: 11470
// Function ID: 11471
// Name: useAnimationDelayedAutoFocus
// Dependencies: [19, 11463, 2]
// Exports: useAnimationDelayedAutoFocus

// Module 11470 (useAnimationDelayedAutoFocus)
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  const _require = autoFocus;
  const dependencyMap = onPress;
  const awaitAnimationCompletion = _require(11463).useAwaitAnimationCompletion();
  let closure_3 = awaitAnimationCompletion.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = awaitAnimationCompletion.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        callback();
      });
    }
    ref.current = true;
  }, items);
};
