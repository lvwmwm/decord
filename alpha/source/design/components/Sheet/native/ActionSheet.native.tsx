// Module ID: 7444
// Function ID: 7445
// Name: ActionSheet
// Dependencies: [19, 21, 4757, 576, 7397, 2]

// Module 7444 (ActionSheet)
import nativeDefault from "native" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7397 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
let closure_3 = createStyles.createStyles(obj);
const obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = noop.forwardRef((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = closure_3());
  return jsx(Sheet_BottomSheet.BottomSheet, { ref });
});
