// Module ID: 14006
// Function ID: 14007
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5156, 4967, 2]
// Exports: default

// Module 14006 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4967 */;
import react2 from "react" /* 5156 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
