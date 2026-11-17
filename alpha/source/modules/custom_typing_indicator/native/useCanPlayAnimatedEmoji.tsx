// Module ID: 13469
// Function ID: 13470
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5324, 5135, 2]
// Exports: default

// Module 13469 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 5135 */;
import react2 from "react" /* 5324 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
