// Module ID: 14626
// Function ID: 110306
// Name: useFocusRefOnNavigation
// Dependencies: []
// Exports: default

// Module 14626 (useFocusRefOnNavigation)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default function useFocusRefOnNavigation(inputRef) {
  inputRef = inputRef.inputRef;
  const arg1 = inputRef;
  let flag = inputRef.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const dependencyMap = flag;
  let React;
  const isFocused = arg1(dependencyMap[1]).useIsFocused();
  React = isFocused;
  const items = [flag, inputRef, isFocused];
  const effect = React.useEffect(() => {
    const inputRef = inputRef(flag[2]).runAfterInteractions(() => {
      let tmp = closure_1;
      if (closure_1) {
        tmp = closure_2;
      }
      if (tmp) {
        const current = ref.current;
        if (null != current) {
          current.focus();
        }
      }
    });
    return () => {
      ref.cancel();
    };
  }, items);
};
