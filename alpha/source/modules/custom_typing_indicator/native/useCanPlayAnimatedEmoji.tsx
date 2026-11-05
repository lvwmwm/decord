// Module ID: 13979
// Function ID: 13980
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5157, 4968, 2]
// Exports: default

// Module 13979 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4968 */;
import react2 from "react" /* 5157 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
