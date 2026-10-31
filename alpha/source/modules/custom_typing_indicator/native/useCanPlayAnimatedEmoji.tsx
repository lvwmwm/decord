// Module ID: 13733
// Function ID: 13734
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5028, 4839, 2]
// Exports: default

// Module 13733 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4839 */;
import react2 from "react" /* 5028 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
