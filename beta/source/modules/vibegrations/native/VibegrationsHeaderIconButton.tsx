// Module ID: 16240
// Function ID: 16241
// Name: VibegrationsHeaderIconButton
// Dependencies: [19, 21, 4836, 5435, 2]

// Module 16240 (VibegrationsHeaderIconButton)
import Fragment from "Fragment" /* 21 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
const androidRippleConfig = { borderless: true, radius: 20 };
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let IconComponent;
  let accessibilityActions;
  let accessibilityLabel;
  let accessibilityState;
  let disabled;
  let onAccessibilityAction;
  let onPress;
  ({ IconComponent, onPress, accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled } = arg0);
  const PressableOpacity = Pressables.PressableOpacity;
  return <PressableOpacity ref={arg1} accessibilityRole="button" accessibilityLabel={accessibilityLabel} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} accessibilityState={accessibilityState} disabled={disabled} onPress={onPress} activeOpacity={0.6} androidRippleConfig={androidRippleConfig} style={closure_3().button}>{null}</PressableOpacity>;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsHeaderIconButton.tsx");

export default forwardRefResult;
