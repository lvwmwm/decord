// Module ID: 12532
// Function ID: 12533
// Name: ConjureProjectHeaderTitle
// Dependencies: [19, 17, 21, 5009, 575, 6974, 1114, 3865, 12425, 5619, 2]
// Exports: default

// Module 12532 (ConjureProjectHeaderTitle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import Pressables from "Pressables" /* 6974 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12425 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default function ConjureProjectHeaderTitle(project) {
  let intl;
  let items;
  let obj3;
  let onPressIcon;
  let title;
  project = project.project;
  ({ title, onPressIcon } = project);
  const tmp = closure_7();
  let tmp4 = null;
  const obj = { style: tmp.row, children: items };
  const tmp2 = hasOwnProperty;
  if (null != project) {
    const obj2 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: intl.string(_modDef3865.FzfmQ8), children: React3(ConjureProjectIconDefault, obj3) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { project, size: "list" };
    tmp4 = React3(PressableOpacity, obj2);
  }
  items = [tmp4, ];
  const obj4 = { style: tmp.titles, children: React3(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, maxFontSizeMultiplier: 2, variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", children: title }) };
  items[1] = React3(View, obj4);
  return tmp2(View, obj);
};
