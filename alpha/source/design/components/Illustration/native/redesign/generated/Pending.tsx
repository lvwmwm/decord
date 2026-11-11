// Module ID: 19566
// Function ID: 19567
// Name: Pending
// Dependencies: [19, 21, 8117, 19567, 19568, 19569, 5250, 5957, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 19566 (Pending)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
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
  const obj = _mod8117;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function usePendingSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8117;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function Pending(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8117;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
