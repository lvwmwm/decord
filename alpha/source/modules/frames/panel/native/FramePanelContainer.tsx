// Module ID: 17050
// Function ID: 17051
// Name: FramePanelContainer
// Dependencies: [19, 8664, 8665, 21, 504, 17051, 17053, 2]

// Module 17050 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17051 */;
import FramePanelUIDefault from "FramePanelUI" /* 17053 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 8664 */;

const require = fn;
const isLaunched = fn(8665).isLaunched;
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
