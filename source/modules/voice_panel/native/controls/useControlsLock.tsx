// Module ID: 16170
// Function ID: 16171
// Name: useControlsLock
// Dependencies: [19, 11645, 2]
// Exports: default

// Module 16170 (useControlsLock)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default function useControlsLock(arg0) {
  const importDefault = arg0;
  generateStateLocker = first.useContext(importDefault(generateStateLocker[1])).generateStateLocker;
  first = first.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = first.useLayoutEffect(() => () => noop.unlock(), items);
  return first;
};
