// Module ID: 15660
// Function ID: 119632
// Name: useControlsLock
// Dependencies: []
// Exports: default

// Module 15660 (useControlsLock)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default function useControlsLock(arg0) {
  const importDefault = arg0;
  const dependencyMap = React.useContext(importDefault(dependencyMap[1])).generateStateLocker;
  const first = React.useState(() => generateStateLocker(arg0))[0];
  const React = first;
  const items = [first];
  const layoutEffect = React.useLayoutEffect(() => () => closure_2.unlock(), items);
  return first;
};
