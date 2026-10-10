// Module ID: 15175
// Function ID: 15176
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 5092, 558, 576, 5088, 2]

// Module 15175 (FamilyCenterEmpty)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5088);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ empty: { display: "flex", alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterEmpty(text) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  text = text.text;
  const tmp4 = closure_4();
  if (cResult[0] !== text) {
    const tmp7 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text });
    cResult[0] = text;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.empty) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = <View style={tmp4.empty}>{tmp5}</View>;
  cResult[2] = tmp4.empty;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function FamilyCenterEmpty(text) {
  text = text.text;
  return <View style={closure_4().empty}>{jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text })}</View>;
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default tmp3;
