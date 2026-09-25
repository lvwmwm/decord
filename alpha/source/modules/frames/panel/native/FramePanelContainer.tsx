// Module ID: 16830
// Function ID: 16831
// Name: FramePanelContainer
// Dependencies: [19, 8491, 8492, 21, 504, 16831, 16833, 2]

// Module 16830 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 16831 */;
import FramePanelUIDefault from "FramePanelUI" /* 16833 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 8491 */;

const require = fn;
const isLaunched = fn(8492).isLaunched;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(function FramePanelContainer() {
  const items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: jsx(FramePanelUIDefault, {}) };
    tmp2 = jsx(FramePanelControllerDefault, { children: jsx(FramePanelUIDefault, {}) });
  }
  return tmp2;
});
