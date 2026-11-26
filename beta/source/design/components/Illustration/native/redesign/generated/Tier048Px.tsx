// Module ID: 14120
// Function ID: 14121
// Name: Tier048Px
// Dependencies: [19, 21, 7786, 14121, 14122, 14123, 4920, 5600, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 14120 (Tier048Px)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4920 */;
import FastImageDefault from "FastImage" /* 5600 */;
import _mod7786 from "module_7786" /* 7786 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export function getTier048PxSource(theme) {
  const obj = _mod7786;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useTier048PxSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7786;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function Tier048Px(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7786;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
