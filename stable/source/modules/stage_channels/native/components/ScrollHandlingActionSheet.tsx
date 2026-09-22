// Module ID: 8714
// Function ID: 8715
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 7253, 2]
// Exports: default

// Module 8714 (ScrollHandlingActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7253 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.assign({ children: 0, scrollableDeviceHeightBreakpoint: 0 }));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true });
};
