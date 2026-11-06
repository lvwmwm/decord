// Module ID: 20165
// Function ID: 20166
// Name: ChannelSetup
// Dependencies: [19, 21, 8898, 20166, 20167, 20168, 5177, 5872, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 20165 (ChannelSetup)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5177 */;
import FastImageDefault from "FastImage" /* 5872 */;
import _mod8898 from "module_8898" /* 8898 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export function getChannelSetupSource(theme) {
  const obj = _mod8898;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useChannelSetupSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8898;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8898;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
