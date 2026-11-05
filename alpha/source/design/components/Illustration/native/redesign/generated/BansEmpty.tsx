// Module ID: 20140
// Function ID: 20141
// Name: BansEmpty
// Dependencies: [19, 21, 8952, 20141, 20142, 20143, 5150, 5854, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 20140 (BansEmpty)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5150 */;
import FastImageDefault from "FastImage" /* 5854 */;
import _mod8952 from "module_8952" /* 8952 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  const obj = _mod8952;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useBansEmptySource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8952;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function BansEmpty(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8952;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
