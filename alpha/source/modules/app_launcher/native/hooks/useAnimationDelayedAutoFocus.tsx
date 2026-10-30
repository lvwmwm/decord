// Module ID: 12323
// Function ID: 12324
// Name: useAnimationDelayedAutoFocus
// Dependencies: [19, 12316, 2]
// Exports: useAnimationDelayedAutoFocus

// Module 12323 (useAnimationDelayedAutoFocus)
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 12316 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  let closure_0 = autoFocus;
  let closure_1 = onPress;
  const obj = useAwaitAnimationComplete;
  const awaitAnimationCompletion = obj.useAwaitAnimationCompletion();
  let closure_3 = react.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && !ref.current;
    if (tmp) {
      awaitAnimationCompletion(() => {
        closure_1_1();
      });
    }
    ref.current = true;
  }, items);
}
