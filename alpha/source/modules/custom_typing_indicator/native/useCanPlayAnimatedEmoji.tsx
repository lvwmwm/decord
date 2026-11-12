// Module ID: 14482
// Function ID: 14483
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5257, 5068, 2]
// Exports: default

// Module 14482 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 5068 */;
import react2 from "react" /* 5257 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
