// Module ID: 8901
// Function ID: 8902
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 7427, 2]
// Exports: default

// Module 8901 (ScrollHandlingActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7427 */;
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
