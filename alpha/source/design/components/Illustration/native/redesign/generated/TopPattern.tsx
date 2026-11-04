// Module ID: 15635
// Function ID: 15636
// Name: TopPattern
// Dependencies: [19, 21, 8947, 15636, 15637, 15638, 5148, 5851, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 15635 (TopPattern)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5851 */;
import _mod8947 from "module_8947" /* 8947 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export function getTopPatternSource(theme) {
  const obj = _mod8947;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useTopPatternSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8947;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function TopPattern(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8947;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
