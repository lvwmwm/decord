// Module ID: 16259
// Function ID: 126610
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [31, 27, 33, 7403, 16260, 16261, 16262, 3976, 2]
// Exports: EmptyServerSettingsEmoji

// Module 16259 (getEmptyServerSettingsEmojiSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getEmptyServerSettingsEmojiSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    },
    light() {
      return outer1_0(outer1_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useEmptyServerSettingsEmojiSource() {
  return getEmptyServerSettingsEmojiSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export { getEmptyServerSettingsEmojiSource };
export { useEmptyServerSettingsEmojiSource };
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useEmptyServerSettingsEmojiSource();
  return <Image />;
};
