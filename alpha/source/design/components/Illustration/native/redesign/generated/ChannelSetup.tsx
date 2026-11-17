// Module ID: 20670
// Function ID: 20671
// Name: ChannelSetup
// Dependencies: [19, 21, 8194, 20671, 20672, 20673, 5317, 6014, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 20670 (ChannelSetup)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
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
  const obj = _mod8194;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useChannelSetupSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8194;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function ChannelSetup(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8194;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
