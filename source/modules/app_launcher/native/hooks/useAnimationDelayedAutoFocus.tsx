// Module ID: 11322
// Function ID: 87881
// Name: useAnimationDelayedAutoFocus
// Dependencies: [31, 11315, 2]
// Exports: useAnimationDelayedAutoFocus

// Module 11322 (useAnimationDelayedAutoFocus)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  const _require = autoFocus;
  const dependencyMap = onPress;
  const awaitAnimationCompletion = _require(11315).useAwaitAnimationCompletion();
  let closure_3 = awaitAnimationCompletion.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = awaitAnimationCompletion.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        outer1_1();
      });
    }
    ref.current = true;
  }, items);
};
