// Module ID: 6885
// Function ID: 6886
// Name: ActionSheet
// Dependencies: [109, 19, 21, 5090, 587, 558, 576, 6829, 2]

// Module 6885 (ActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let obj2;
let tmp;
const Sheet_BottomSheet = tmp(6829);
let closure_2 = ["ref"];
const jsx = Fragment.jsx;
let obj = { content: obj2, body: { gap: 24 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheet(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_5();
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp9.body) {
        let tmp10;
        if (cResult[6] === tmp9.content) {
          tmp10 = cResult[7];
        }
        return tmp10;
      }
    }
  }
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(tmp4);
  ({ content: obj2.contentStyles, body: obj2.bodyStyles } = tmp9);
  const tmp12 = <BottomSheet ref={tmp5} />;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp9.body;
  cResult[6] = tmp9.content;
  cResult[7] = tmp12;
  tmp10 = tmp12;
}) : (function ActionSheet(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { ref: ref.ref };
  const tmp2 = closure_5();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = tmp2);
  return <BottomSheet ref={arg0.ref} />;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = tmp3;
