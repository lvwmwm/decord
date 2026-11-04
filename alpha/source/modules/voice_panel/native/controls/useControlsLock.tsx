// Module ID: 19482
// Function ID: 19483
// Name: useControlsLock
// Dependencies: [19, 11410, 2]
// Exports: default

// Module 19482 (useControlsLock)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11410 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default function useControlsLock(arg0) {
  let closure_0 = arg0;
  const generateStateLocker = react.useContext(VoicePanelStateContextDefault).generateStateLocker;
  const first = react.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = react.useLayoutEffect(() => () => first.unlock(), items);
  return first;
};
