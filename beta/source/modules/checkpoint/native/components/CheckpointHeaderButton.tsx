// Module ID: 15980
// Function ID: 15981
// Name: CheckpointHeaderButton
// Dependencies: [17, 4983, 21, 4758, 558, 568, 580, 2]

// Module 15980 (CheckpointHeaderButton)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import CheckpointConstants from "CheckpointConstants" /* 4983 */;
import createStyles from "createStyles" /* 4758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Pressable = _mod17.Pressable;
const jsx = jsxProd.jsx;
let closure_5 = createStyles.createStyles({ button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CheckpointConstants.CHECKPOINT_PRIMARY } });
let obj = { button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CheckpointConstants.CHECKPOINT_PRIMARY } };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ accessibilityLabel, children, onPress } = arg0);
  const tmp3 = closure_5();
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === children) {
      if (cResult[2] === onPress) {
        if (cResult[3] === tmp3.button) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const tmp5 = <Pressable style={tmp3.button} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
  cResult[0] = accessibilityLabel;
  cResult[1] = children;
  cResult[2] = onPress;
  cResult[3] = tmp3.button;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  ({ accessibilityLabel, children, onPress } = arg0);
  return <Pressable style={closure_5().button} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
});
