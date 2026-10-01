// Module ID: 6618
// Function ID: 6619
// Name: ActionSheet
// Dependencies: [19, 21, 4836, 576, 6571, 2]

// Module 6618 (ActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const jsx = Fragment.jsx;
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
({ paddingHorizontal: nativeDefault.space.PX_16 });
let closure_3 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const obj = { ref };
  const tmp = closure_3();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = tmp);
  return <BottomSheet ref={arg1} />;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;
