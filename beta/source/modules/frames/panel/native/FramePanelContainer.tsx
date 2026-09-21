// Module ID: 17502
// Function ID: 17503
// Name: FramePanelContainer
// Dependencies: [19, 9313, 9314, 21, 504, 17503, 17505, 2]

// Module 17502 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17503 */;
import FramePanelUIDefault from "FramePanelUI" /* 17505 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9313 */;

const require = fn;
const isLaunched = fn(9314).isLaunched;
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
