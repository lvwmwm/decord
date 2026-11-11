// Module ID: 15819
// Function ID: 15820
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 5503, 2]
// Exports: default

// Module 15819 (ScrollHandlingActionSheet)
import Fragment from "Fragment" /* 21 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5503 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0, scrollableDeviceHeightBreakpoint: 0 }));
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  return <BottomSheet startExpanded>{children}</BottomSheet>;
};
