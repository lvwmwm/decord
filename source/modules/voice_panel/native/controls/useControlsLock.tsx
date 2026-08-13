// Module ID: 16246
// Function ID: 16247
// Name: useControlsLock
// Dependencies: [19, 11704, 2]
// Exports: default

// Module 16246 (useControlsLock)
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
