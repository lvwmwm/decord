// Module ID: 11610
// Function ID: 11611
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 558, 4795, 2041, 2]

// Module 11610 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 2041 */;
import react2 from "react" /* 4795 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
}) : (function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default tmp2;
