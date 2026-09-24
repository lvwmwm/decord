// Module ID: 17026
// Function ID: 17027
// Name: VibegrationsHeaderIconButton
// Dependencies: [19, 21, 4829, 5427, 2]

// Module 17026 (VibegrationsHeaderIconButton)
import Pressables from "Pressables" /* 5427 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_3 = createStyles.createStyles({ button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
const androidRippleConfig = { borderless: true, radius: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsHeaderIconButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ IconComponent, onPress, accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled } = arg0);
  const tmp = closure_3();
  return jsx(Pressables.PressableOpacity, { ref, accessibilityRole: "button", accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled, onPress, activeOpacity: 0.6, androidRippleConfig, style: closure_3().button, children: <IconComponent /> });
});
