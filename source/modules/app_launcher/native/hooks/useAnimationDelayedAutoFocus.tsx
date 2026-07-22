// Module ID: 11282
// Function ID: 87811
// Name: useAnimationDelayedAutoFocus
// Dependencies: [2, 8420, 31]
// Exports: useAnimationDelayedAutoFocus

// Module 11282 (useAnimationDelayedAutoFocus)
import result2 from "result2";
import module_31 from "module_31";

const result = module_31.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  onPress = autoFocus;
  const dependencyMap = onPress;
  const awaitAnimationCompletion = onPress(dependencyMap[1]).useAwaitAnimationCompletion();
  const React = awaitAnimationCompletion;
  let closure_3 = React.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = React.useEffect(() => {
    let tmp = arg0;
    if (arg0) {
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
