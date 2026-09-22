// Module ID: 17206
// Function ID: 17207
// Name: useControlsLock
// Dependencies: [19, 12405, 2]
// Exports: default

// Module 17206 (useControlsLock)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12405 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default function useControlsLock(arg0) {
  closure_0 = arg0;
  const generateStateLocker = noop.useContext(VoicePanelStateContextDefault).generateStateLocker;
  const first = noop.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = noop.useLayoutEffect(() => () => first.unlock(), items);
  return first;
};
