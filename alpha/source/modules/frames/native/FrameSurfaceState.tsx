// Module ID: 18671
// Function ID: 18672
// Name: FrameSurfaceState
// Dependencies: [19, 17, 21, 5014, 575, 5624, 6953, 2]
// Exports: FrameSurfaceExplanation, FrameSurfaceLoading

// Module 18671 (FrameSurfaceState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, action: obj3 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/frames/native/FrameSurfaceState.tsx");

export function FrameSurfaceExplanation(icon) {
  let action;
  let description;
  let error;
  let heading;
  let items;
  ({ heading, description, error, action } = icon);
  icon = icon.icon;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [icon, , , , ];
  let tmp4 = null;
  const tmp2 = React3;
  if (null != heading) {
    const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
    tmp4 = _false(Text_Text.Heading, obj2);
  }
  items[1] = tmp4;
  let tmp8 = null;
  if (null != description) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
    tmp8 = _false(Text_Text.Text, obj3);
  }
  items[2] = tmp8;
  let tmp12 = null;
  if (null != error) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp12 = _false(Text_Text.Text, obj4);
  }
  items[3] = tmp12;
  let tmp16 = null;
  if (null != action) {
    const obj5 = { style: tmp.action, children: action };
    tmp16 = _false(tmp3, obj5);
  }
  items[4] = tmp16;
  return tmp2(View, obj);
}
export function FrameSurfaceLoading() {
  const obj = { style: closure_5().container, children: _false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return _false(View, obj);
}
