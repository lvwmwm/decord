// Module ID: 15279
// Function ID: 15280
// Name: CheckpointPressable
// Dependencies: [17, 5061, 21, 4836, 2]
// Exports: default

// Module 15279 (CheckpointPressable)
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let c3;
let items;
let map;
let obj2;
({ Pressable: _window, View: map } = react_native);
const CHECKPOINT_BUTTON_SHADOW = CheckpointConstants.CHECKPOINT_BUTTON_SHADOW;
({ jsx: c2, jsxs: c3 } = Fragment);
let obj = { container: { paddingRight: 4, paddingBottom: 4 }, shadow: { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: CHECKPOINT_BUTTON_SHADOW }, pressed: obj2 };
obj2 = { transform: items };
items = [{ translateX: 4 }, { translateY: 4 }];
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointPressable.tsx");

export default function CheckpointPressable(style) {
  let children;
  let containerStyle;
  let items;
  let items1;
  style = style.style;
  ({ containerStyle, children } = style);
  const merged = Object.assign(style, Object.assign({ style: 0, containerStyle: 0, children: 0 }));
  const tmp2 = closure_4();
  map = tmp2;
  const obj = { style: items, children: items1 };
  items = [tmp2.container, containerStyle];
  items1 = [, ];
  const obj2 = { style: tmp2.shadow };
  items1[0] = React2(map, obj2);
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [style, ];
      if (pressed) {
        pressed = pressed.pressed;
      }
      items[1] = pressed;
      return items;
    },
    children
  };
  const merged1 = Object.assign(merged);
  items1[1] = React2(React, obj3);
  return _false(map, obj);
};
export const SHADOW_OFFSET = 4;
