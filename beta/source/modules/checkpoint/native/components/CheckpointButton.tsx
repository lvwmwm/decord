// Module ID: 15278
// Function ID: 15279
// Name: CheckpointButton
// Dependencies: [5061, 21, 4836, 15279, 576, 15262, 2]
// Exports: default

// Module 15278 (CheckpointButton)
import nativeDefault from "native" /* 576 */;
import CheckpointPressable from "CheckpointPressable" /* 15279 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

let CHECKPOINT_BUTTON_BORDER;
let c2;
let c3;
let closure_4;
let obj2;
let obj3;
let tmp3;
const CheckpointTextDefault = tmp3(15262);
({ CHECKPOINT_PRIMARY: c2, CHECKPOINT_BUTTON_BORDER } = CheckpointConstants);
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(onPress) {
  let Icon;
  let items;
  let label;
  ({ Icon, label } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_5();
  let tmp6 = null != Icon;
  const obj = { containerStyle: tmp.container, style: tmp.button, onPress, accessibilityRole: "button", accessibilityLabel: label, children: items };
  const tmp2 = React3;
  const tmp5 = CheckpointPressableDefault;
  if (tmp6) {
    const obj2 = { color, size: "sm" };
    tmp6 = _false(Icon, obj2);
  }
  items = [tmp6, ];
  let tmp9 = null != label;
  if (tmp9) {
    const obj3 = { variant: "text-lg/medium", style: tmp.label, children: label };
    tmp9 = _false(CheckpointTextDefault, obj3);
  }
  items[1] = tmp9;
  return tmp2(tmp5, obj);
};
