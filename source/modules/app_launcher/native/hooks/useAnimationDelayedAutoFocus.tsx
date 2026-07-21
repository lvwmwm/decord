// Module ID: 11281
// Function ID: 87786
// Name: useAnimationDelayedAutoFocus
// Dependencies: []
// Exports: useAnimationDelayedAutoFocus

// Module 11281 (useAnimationDelayedAutoFocus)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

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
