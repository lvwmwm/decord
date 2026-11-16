// Module ID: 14013
// Function ID: 14014
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5184, 4995, 2]
// Exports: default

// Module 14013 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4995 */;
import react2 from "react" /* 5184 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
