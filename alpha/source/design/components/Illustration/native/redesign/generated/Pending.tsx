// Module ID: 19054
// Function ID: 19055
// Name: Pending
// Dependencies: [19, 21, 8425, 19055, 19056, 19057, 4924, 5604, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 19054 (Pending)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4924 */;
import FastImageDefault from "FastImage" /* 5604 */;
import _mod8425 from "module_8425" /* 8425 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  const obj = _mod8425;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function usePendingSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8425;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function Pending(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8425;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
