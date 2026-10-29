// Module ID: 12382
// Function ID: 12383
// Name: ConjureProjectHeaderTitle
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 12383, 6968, 1125, 3864, 12264, 5271, 2]

// Module 12382 (ConjureProjectHeaderTitle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import Text_Text from "Text/Text" /* 5271 */;
import Pressables from "Pressables" /* 6968 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12264 */;
import useConjurePublishedServerNameDefault from "useConjurePublishedServerName" /* 12383 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
let obj = { row: obj2, titles: { flex: 1, justifyContent: "center" } };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectHeaderTitle(arg0) {
  let intl;
  let items;
  let items1;
  let obj7;
  let onPressIcon;
  let project;
  let title;
  const obj = react2;
  const cResult = obj.c(15);
  ({ project, title, onPressIcon } = arg0);
  const tmp4 = closure_7();
  let str;
  const tmp6 = useConjurePublishedServerNameDefault;
  if (project != null) {
    str = project.id;
  }
  if (str == null) {
    str = "";
  }
  const tmp6Result = tmp6(str);
  if (cResult[0] === onPressIcon) {
    let tmp8;
    let tmp12;
    let tmp15;
    if (cResult[1] === project) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== title) {
      const obj2 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, maxFontSizeMultiplier: 2, variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", children: title };
      const tmp14 = React3(Text_Text.Text, obj2);
      cResult[3] = title;
      cResult[4] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp6Result) {
      let tmp16 = null;
      if (null != tmp6Result) {
        const obj3 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/normal", color: "text-subtle", children: tmp6Result };
        tmp16 = React3(tmp(5271).Text, obj3);
      }
      cResult[5] = tmp6Result;
      cResult[6] = tmp16;
      tmp15 = tmp16;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp4.titles) {
      if (cResult[8] === tmp12) {
        let tmp18;
        if (cResult[9] === tmp15) {
          tmp18 = cResult[10];
        }
        if (cResult[11] === tmp4.row) {
          if (cResult[12] === tmp8) {
            let tmp22;
            if (cResult[13] === tmp18) {
              tmp22 = cResult[14];
            }
            return tmp22;
          }
        }
        const obj4 = { style: tmp4.row, children: items };
        items = [tmp8, tmp18];
        const tmp25 = hasOwnProperty(View, obj4);
        cResult[11] = tmp4.row;
        cResult[12] = tmp8;
        cResult[13] = tmp18;
        cResult[14] = tmp25;
        tmp22 = tmp25;
      }
    }
    const obj5 = { style: tmp4.titles, children: items1 };
    items1 = [tmp12, tmp15];
    const tmp21 = hasOwnProperty(View, obj5);
    cResult[7] = tmp4.titles;
    cResult[8] = tmp12;
    cResult[9] = tmp15;
    cResult[10] = tmp21;
    tmp18 = tmp21;
  }
  let tmp9 = null;
  if (null != project) {
    const obj6 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: intl.string(_modDef3864.FzfmQ8), children: React3(ConjureProjectIconDefault, obj7) };
    const PressableOpacity = tmp(6968).PressableOpacity;
    intl = tmp(1125).intl;
    obj7 = { project, size: "list" };
    tmp9 = React3(PressableOpacity, obj6);
  }
  cResult[0] = onPressIcon;
  cResult[1] = project;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureProjectHeaderTitle(project) {
  let intl;
  let items;
  let items1;
  let obj3;
  let onPressIcon;
  let title;
  project = project.project;
  ({ title, onPressIcon } = project);
  const tmp = closure_7();
  let str;
  const tmp4 = useConjurePublishedServerNameDefault;
  if (project != null) {
    str = project.id;
  }
  if (str == null) {
    str = "";
  }
  const tmp4Result = tmp4(str);
  let tmp8 = null;
  const obj = { style: tmp.row, children: items };
  if (null != project) {
    const obj2 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: intl.string(_modDef3864.FzfmQ8), children: React3(ConjureProjectIconDefault, obj3) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { project, size: "list" };
    tmp8 = React3(PressableOpacity, obj2);
  }
  items = [tmp8, ];
  const obj4 = { style: tmp.titles, children: items1 };
  items1 = [React3(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, maxFontSizeMultiplier: 2, variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", children: title }), ];
  let tmp12Result = null;
  const tmp12 = React3;
  if (null != tmp4Result) {
    const obj5 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/normal", color: "text-subtle", children: tmp4Result };
    tmp12Result = tmp12(Text_Text.Text, obj5);
  }
  items1[1] = tmp12Result;
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default tmp4;
