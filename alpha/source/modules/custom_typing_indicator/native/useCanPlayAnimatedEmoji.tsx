// Module ID: 12980
// Function ID: 12981
// Name: useCanPlayAnimatedEmoji
// Dependencies: [19, 5057, 4868, 2]
// Exports: default

// Module 12980 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4868 */;
import react2 from "react" /* 5057 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const tmp = AnimateEmoji.useSetting() && !enabled;
  return tmp;
};
