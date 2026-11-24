// Module ID: 12767
// Function ID: 12768
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 4931, 4742, 2]
// Exports: default

// Module 12767 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4742 */;
import react2 from "react" /* 4931 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
