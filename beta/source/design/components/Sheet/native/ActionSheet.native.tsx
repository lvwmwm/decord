// Module ID: 7481
// Function ID: 7482
// Name: ActionSheet
// Dependencies: [19, 21, 4790, 580, 558, 568, 7429, 2]

// Module 7481 (ActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7429 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
let closure_3 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(5);
  const tmp4 = closure_3();
  if (cResult[0] === arg0) {
    if (cResult[1] === ref) {
      if (cResult[2] === tmp4.body) {
        if (cResult[3] === tmp4.content) {
          let tmp5 = cResult[4];
        }
        return tmp5;
      }
    }
  }
  const merged = Object.assign(arg0);
  ({ content: obj2.contentStyles, body: obj2.bodyStyles } = tmp4);
  const tmp7 = jsx(Sheet_BottomSheet.BottomSheet, { ref });
  cResult[0] = arg0;
  cResult[1] = ref;
  cResult[2] = tmp4.body;
  cResult[3] = tmp4.content;
  cResult[4] = tmp7;
  tmp5 = tmp7;
}) : ((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = closure_3());
  return jsx(Sheet_BottomSheet.BottomSheet, { ref });
}));
