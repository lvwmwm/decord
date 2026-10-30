// Module ID: 7360
// Function ID: 7361
// Name: ActionSheet
// Dependencies: [19, 21, 5009, 575, 5267, 2]
// Exports: ActionSheet

// Module 7360 (ActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const jsx = Fragment.jsx;
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
({ paddingHorizontal: nativeDefault.space.PX_16 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export function ActionSheet(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { ref: ref.ref };
  const tmp2 = closure_3();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = tmp2);
  return <BottomSheet ref={arg0.ref} />;
}
