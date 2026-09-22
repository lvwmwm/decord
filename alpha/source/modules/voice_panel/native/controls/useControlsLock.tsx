// Module ID: 17600
// Function ID: 17601
// Name: useControlsLock
// Dependencies: [19, 12529, 2]
// Exports: default

// Module 17600 (useControlsLock)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12529 */;
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
