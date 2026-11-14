// Module ID: 14594
// Function ID: 14595
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5320, 5131, 2]
// Exports: default

// Module 14594 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 5131 */;
import react2 from "react" /* 5320 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
