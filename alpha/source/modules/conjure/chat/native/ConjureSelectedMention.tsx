// Module ID: 17072
// Function ID: 17073
// Name: ConjureSelectedMention
// Dependencies: [19, 21, 5091, 587, 558, 576, 5087, 2]

// Module 17072 (ConjureSelectedMention)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const Text_Text = tmp(5087);
const jsx = Fragment.jsx;
let obj = { chip: obj2 };
obj2 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectedMention(arg0) {
  let label;
  let onPress;
  let variant;
  const obj = react2;
  const cResult = obj.c(6);
  ({ label, variant, onPress } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === label) {
    if (cResult[1] === onPress) {
      if (cResult[2] === tmp4.chip) {
        if (cResult[3] === "button") {
          let tmp5;
          if (cResult[4] === variant) {
            tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  const tmp6 = jsx(Text_Text.Text, { variant, style: tmp4.chip, onPress, accessibilityRole: "button", children: label });
  cResult[0] = label;
  cResult[1] = onPress;
  cResult[2] = tmp4.chip;
  cResult[3] = "button";
  cResult[4] = variant;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureSelectedMention(onPress) {
  let label;
  let variant;
  onPress = onPress.onPress;
  ({ label, variant } = onPress);
  const obj = { variant, style: closure_3().chip, onPress, accessibilityRole: "button", children: label };
  const Text = Text_Text.Text;
  return jsx(Text, obj);
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureSelectedMention.tsx");

export default tmp3;
