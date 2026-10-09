// Module ID: 15113
// Function ID: 15114
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 5091, 558, 576, 6163, 15114, 5087, 2]

// Module 15113 (FamilyCenterEmpty)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6163 */;
import AssetRegistryDefault from "AssetRegistry" /* 15114 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const Text_Text = tmp(5087);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterEmpty(text) {
  let items;
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  text = text.text;
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.art) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.art, resizeMethod: "scale" };
    const tmp8 = FastImageDefault;
    const tmp9 = React3(tmp8, obj2);
    cResult[0] = tmp4.art;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== text) {
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: text };
    const tmp12 = React3(Text_Text.Text, obj3);
    cResult[2] = text;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.empty) {
    if (cResult[5] === tmp5) {
      let tmp13;
      if (cResult[6] === tmp10) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const obj4 = { style: tmp4.empty, children: items };
  items = [tmp5, tmp10];
  const tmp14 = hasOwnProperty(View, obj4);
  cResult[4] = tmp4.empty;
  cResult[5] = tmp5;
  cResult[6] = tmp10;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function FamilyCenterEmpty(text) {
  let items;
  text = text.text;
  const tmp = closure_6();
  const obj = { style: tmp.empty, children: items };
  const obj2 = { source: AssetRegistryDefault, style: tmp.art, resizeMethod: "scale" };
  const tmp2 = FastImageDefault;
  items = [React3(tmp2, obj2), React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text })];
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default tmp4;
