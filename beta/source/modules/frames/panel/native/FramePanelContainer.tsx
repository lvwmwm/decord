// Module ID: 16863
// Function ID: 16864
// Name: FramePanelContainer
// Dependencies: [19, 8499, 8500, 21, 504, 16864, 16866, 2]

// Module 16863 (FramePanelContainer)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import FramePanelControllerDefault from "FramePanelController" /* 16864 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8499 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const jsx = Fragment.jsx;
const memoResult = react.memo(function FramePanelContainer() {
  let mainFrame;
  const items = [FramesStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    FramePanelControllerDefault;
    tmp2 = <tmp5>{null}</tmp5>;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
