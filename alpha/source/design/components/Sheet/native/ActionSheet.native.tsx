// Module ID: 7546
// Function ID: 7547
// Name: ActionSheet
// Dependencies: [19, 21, 5043, 575, 5271, 2]
// Exports: ActionSheet

// Module 7546 (ActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5271 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
({ paddingHorizontal: nativeDefault.space.PX_16 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export function ActionSheet(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { ref: ref.ref };
  const tmp2 = closure_3();
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = tmp2);
  return <BottomSheet ref={arg0.ref} />;
}
