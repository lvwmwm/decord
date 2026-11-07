// Module ID: 13980
// Function ID: 13981
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5154, 4965, 2]
// Exports: default

// Module 13980 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4965 */;
import react2 from "react" /* 5154 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
