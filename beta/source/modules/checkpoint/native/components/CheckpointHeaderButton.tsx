// Module ID: 15276
// Function ID: 15277
// Name: CheckpointHeaderButton
// Dependencies: [17, 5061, 21, 4836, 576, 2]
// Exports: default

// Module 15276 (CheckpointHeaderButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
const obj = { button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default function CheckpointHeaderButton(arg0) {
  let accessibilityLabel;
  let children;
  let onPress;
  ({ accessibilityLabel, children, onPress } = arg0);
  return <Pressable style={closure_4().button} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
};
