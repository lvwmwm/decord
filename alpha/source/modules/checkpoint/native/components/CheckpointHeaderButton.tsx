// Module ID: 12819
// Function ID: 12820
// Name: CheckpointHeaderButton
// Dependencies: [19, 17, 5970, 21, 4945, 558, 576, 587, 2]

// Module 12819 (CheckpointHeaderButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointConstants from "CheckpointConstants" /* 5970 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointHeaderButton(arg0) {
  let accessibilityLabel;
  let children;
  let color;
  let onPress;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ accessibilityLabel, children, onPress, color } = arg0);
  if (undefined === color) {
    color = CHECKPOINT_PRIMARY;
  }
  const tmp3 = closure_7();
  if (cResult[0] !== color) {
    const obj2 = { borderColor: color };
    cResult[0] = color;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    let tmp5;
    if (cResult[3] === tmp3.button) {
      tmp5 = cResult[4];
    }
    if (cResult[5] === accessibilityLabel) {
      if (cResult[6] === children) {
        if (cResult[7] === onPress) {
          let tmp6;
          if (cResult[8] === tmp5) {
            tmp6 = cResult[9];
          }
          return tmp6;
        }
      }
    }
    const tmp10 = <Pressable style={tmp5} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
    cResult[5] = accessibilityLabel;
    cResult[6] = children;
    cResult[7] = onPress;
    cResult[8] = tmp5;
    cResult[9] = tmp10;
    tmp6 = tmp10;
  }
  const items = [tmp3.button, tmp4];
  cResult[2] = tmp4;
  cResult[3] = tmp3.button;
  cResult[4] = items;
  tmp5 = items;
}) : (function CheckpointHeaderButton(color) {
  let accessibilityLabel;
  let children;
  let onPress;
  color = color.color;
  ({ accessibilityLabel, children, onPress } = color);
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const items = [color];
  const items1 = [closure_7().button, ];
  closure_7();
  items1[1] = react.useMemo(() => ({ borderColor: color }), items);
  return <Pressable style={items1} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default tmp2;
