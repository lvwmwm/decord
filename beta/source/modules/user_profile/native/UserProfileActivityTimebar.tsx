// Module ID: 12596
// Function ID: 12597
// Name: UserProfileActivityTimebar
// Dependencies: [19, 17, 21, 4836, 576, 12597, 4832, 2]
// Exports: default

// Module 12596 (UserProfileActivityTimebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import useActivityTimer from "useActivityTimer" /* 12597 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const useActivityTimerDefault = useActivityTimer;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { bar: obj2, progress: obj3, textRow: { flexDirection: "row", justifyContent: "space-between" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 4, marginBottom: 4 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: nativeDefault.radii.xs, height: "100%", minWidth: 4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  let duration;
  let elapsed;
  let end;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj7;
  let obj9;
  let start;
  let style;
  ({ start, end, style } = arg0);
  const tmp = closure_6();
  const tmp2 = useActivityTimerDefault({ start, end });
  const obj = { style, children: items1 };
  const obj2 = { style: tmp.bar, children: React3(View, obj3) };
  obj3 = { style: items };
  items = [tmp.progress, ];
  const obj4 = { width: `${100 * tmp2.percentage}%` };
  items[1] = obj4;
  ({ elapsed, duration } = tmp2);
  items1 = [React3(View, obj2), ];
  const obj5 = { style: tmp.textRow, children: items2 };
  const obj6 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: obj7.formatTime(elapsed) };
  const Text = Text_Text.Text;
  obj7 = useActivityTimer;
  items2 = [React3(Text, obj6), ];
  const obj8 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: obj9.formatTime(duration) };
  const Text2 = Text_Text.Text;
  obj9 = useActivityTimer;
  items2[1] = React3(Text2, obj8);
  items1[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj);
};
