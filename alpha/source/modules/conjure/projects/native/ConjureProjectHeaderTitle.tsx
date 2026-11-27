// Module ID: 18620
// Function ID: 18621
// Name: ConjureProjectHeaderTitle
// Dependencies: [19, 17, 21, 5043, 575, 6152, 1112, 4245, 14294, 5634, 6159, 2]
// Exports: default

// Module 18620 (ConjureProjectHeaderTitle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import Pressables from "Pressables" /* 6152 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 14294 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
let createStyles = createStyles_mod;
let obj = { row: obj2, titles: obj3, titleText: { flexShrink: 1 } };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default function ConjureProjectHeaderTitle(arg0) {
  let draft;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj3;
  let obj7;
  let onPressIcon;
  let project;
  let title;
  ({ project, draft } = arg0);
  ({ title, onPressIcon } = arg0);
  if (draft === undefined) {
    draft = false;
  }
  const tmp = closure_7();
  let tmp4 = null;
  const obj = { style: tmp.row, children: items };
  if (null != project) {
    const obj2 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: intl.string(_modDef4245.FzfmQ8), children: React3(ConjureProjectIconDefault, obj3) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl3.intl;
    obj3 = { project, size: "list" };
    tmp4 = React3(PressableOpacity, obj2);
  }
  items = [tmp4, ];
  const obj4 = { style: tmp.titles, children: items1 };
  items1 = [, ];
  const obj5 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, maxFontSizeMultiplier: 2, variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp.titleText, children: title };
  items1[0] = React3(Text_Text.Text, obj5);
  let tmp10Result = null;
  const tmp10 = React3;
  if (draft) {
    const obj6 = { type: obj7, variant: "secondary" };
    obj7 = { text: intl2.string(_modDef4245["2+GiMw"]) };
    const Badge = tmp11(6159).Badge;
    intl2 = tmp11(1112).intl;
    tmp10Result = tmp10(Badge, obj6);
  }
  items1[1] = tmp10Result;
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj);
};
