// Module ID: 19928
// Function ID: 19929
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 21, 8524, 19929, 19930, 19931, 5019, 5699, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 19928 (EmptyServerSettingsEmoji)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5019 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _mod8524 from "module_8524" /* 8524 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function dark() {
  return require("AssetRegistry");
}
function darker() {
  return require("AssetRegistry");
}
function light() {
  return require("AssetRegistry");
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export function getEmptyServerSettingsEmojiSource(theme) {
  const obj = _mod8524;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8524;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8524;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
