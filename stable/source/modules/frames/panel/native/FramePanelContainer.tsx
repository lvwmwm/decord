// Module ID: 17507
// Function ID: 17508
// Name: FramePanelContainer
// Dependencies: [19, 9345, 9346, 21, 504, 17508, 17510, 2]

// Module 17507 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17508 */;
import FramePanelUIDefault from "FramePanelUI" /* 17510 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9345 */;

const require = fn;
const isLaunched = fn(9346).isLaunched;
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
