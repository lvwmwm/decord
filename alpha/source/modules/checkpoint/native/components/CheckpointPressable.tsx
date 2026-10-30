// Module ID: 13627
// Function ID: 13628
// Name: CheckpointPressable
// Dependencies: [17, 6061, 21, 575, 5009, 2]
// Exports: default

// Module 13627 (CheckpointPressable)
import nativeDefault from "native" /* 575 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let CHECKPOINT_CONTROL_SIZE;
let _window;
let c2;
let c3;
let closure_4;
let items;
let map;
let obj2;
let obj3;
let obj6;
({ Pressable: _window, View: map } = react_native);
({ CHECKPOINT_BUTTON_SHADOW: c2, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
let obj = { sm: obj2, lg: obj3 };
obj2 = { height: 32, gap: nativeDefault.space.PX_4, textVariant: "text-md/bold" };
obj3 = { height: CHECKPOINT_CONTROL_SIZE, gap: nativeDefault.space.PX_8, textVariant: "text-lg/medium" };
let obj4 = { container: { paddingRight: PX_4, paddingBottom: PX_4 }, shadow: { position: "absolute", top: PX_4, left: PX_4, right: 0, bottom: 0 }, pressable: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12 }, sm: { height: obj.sm.height, gap: obj.sm.gap }, lg: { height: obj.lg.height, gap: obj.lg.gap }, pressed: obj6 };
obj6 = { transform: items };
items = [{ translateX: PX_4 }, { translateY: PX_4 }];
({ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12 });
let closure_5 = createStyles.createStyles(obj4);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default function CheckpointPressable(arg0) {
  let children;
  let closure_129_0;
  let closure_129_2;
  let containerStyle;
  let disabled;
  let items;
  let items1;
  let items2;
  let onPress;
  let shadowColor;
  ({ style: closure_129_0, disabled } = arg0);
  ({ size: closure_129_2, shadowColor } = arg0);
  ({ containerStyle, children, onPress } = arg0);
  if (shadowColor === undefined) {
    shadowColor = React2;
  }
  const merged = Object.assign(arg0, Object.assign({ style: 0, containerStyle: 0, children: 0, disabled: 0, onPress: 0, size: 0, shadowColor: 0 }));
  const tmp2 = closure_5();
  let c3 = tmp2;
  const obj = { style: items, children: items2 };
  items = [tmp2.container, containerStyle];
  let tmp5 = !disabled;
  const tmp3 = React3;
  if (!disabled) {
    const obj2 = { style: items1 };
    items1 = [tmp2.shadow, ];
    const obj3 = { backgroundColor: shadowColor };
    items1[1] = obj3;
    tmp5 = _false(tmp4, obj2);
  }
  items2 = [tmp5, ];
  const obj4 = {
    onPress,
    style(pressed) {
      pressed = pressed.pressed;
      const items = [pressable.pressable, pressable[closure_1_2], closure_1_0, ];
      const tmp = pressable;
      if (pressed) {
        pressed = !disabled;
      }
      if (pressed) {
        pressed = tmp.pressed;
      }
      items[3] = pressed;
      return items;
    },
    children
  };
  const merged1 = Object.assign(merged);
  items2[1] = _false(React, obj4);
  return tmp3(map, obj);
};
export const SHADOW_OFFSET = PX_4;
export const CHECKPOINT_PRESSABLE_SIZES = obj;
