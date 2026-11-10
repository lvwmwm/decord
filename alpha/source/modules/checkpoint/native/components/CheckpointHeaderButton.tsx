// Module ID: 13700
// Function ID: 13701
// Name: CheckpointHeaderButton
// Dependencies: [19, 17, 6201, 21, 5142, 575, 2]
// Exports: default

// Module 13700 (CheckpointHeaderButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default function CheckpointHeaderButton(color) {
  let accessibilityLabel;
  let children;
  let onPress;
  color = color.color;
  ({ accessibilityLabel, children, onPress } = color);
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const items = [color];
  const items1 = [closure_6().button, ];
  closure_6();
  items1[1] = react.useMemo(() => ({ borderColor: color }), items);
  return <Pressable style={items1} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
};
export const CHECKPOINT_HEADER_BUTTON_SIZE = 32;
