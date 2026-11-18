// Module ID: 12776
// Function ID: 12777
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 4837, 4648, 2]
// Exports: default

// Module 12776 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4648 */;
import react2 from "react" /* 4837 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
