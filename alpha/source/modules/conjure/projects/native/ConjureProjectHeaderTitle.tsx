// Module ID: 17060
// Function ID: 17061
// Name: ConjureProjectHeaderTitle
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 1126, 3827, 12950, 6191, 5087, 2]

// Module 17060 (ConjureProjectHeaderTitle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12950 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
let obj = { row: obj2, title: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectHeaderTitle(arg0) {
  let first;
  let items;
  let onPressIcon;
  let project;
  let title;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(13);
  ({ project, title, onPressIcon } = arg0);
  const tmp4 = closure_7();
  const row = tmp4.row;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3827.FzfmQ8);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project) {
    const obj2 = { project, size: "header" };
    const tmp11 = React3(ConjureProjectIconDefault, obj2);
    cResult[1] = project;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === onPressIcon) {
    let tmp12;
    if (cResult[4] === tmp8) {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp4.title) {
      let tmp14;
      if (cResult[7] === title) {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4.row) {
        if (cResult[10] === tmp12) {
          let tmp17;
          if (cResult[11] === tmp14) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
      const obj3 = { style: row, children: items };
      items = [tmp12, tmp14];
      const tmp20 = hasOwnProperty(View, obj3);
      cResult[9] = tmp4.row;
      cResult[10] = tmp12;
      cResult[11] = tmp14;
      cResult[12] = tmp20;
      tmp17 = tmp20;
    }
    const obj4 = { style: tmp4.title, accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: title };
    const tmp16 = React3(Text_Text.Text, obj4);
    cResult[6] = tmp4.title;
    cResult[7] = title;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const obj5 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: first, children: tmp8 };
  const tmp13 = React3(Pressables.PressableOpacity, obj5);
  cResult[3] = onPressIcon;
  cResult[4] = tmp8;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function ConjureProjectHeaderTitle(arg0) {
  let intl;
  let items;
  let onPressIcon;
  let project;
  let title;
  ({ project, title, onPressIcon } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.row, children: items };
  const obj2 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: intl.string(_modDef3827.FzfmQ8), children: React3(ConjureProjectIconDefault, { project, size: "header" }) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  items = [React3(PressableOpacity, obj2), ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: title };
  items[1] = React3(Text_Text.Text, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default tmp4;
