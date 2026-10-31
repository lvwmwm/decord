// Module ID: 19199
// Function ID: 19200
// Name: useControlsLock
// Dependencies: [19, 11222, 2]
// Exports: default

// Module 19199 (useControlsLock)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
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
