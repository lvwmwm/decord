// Module ID: 19936
// Function ID: 19937
// Name: BansEmpty
// Dependencies: [19, 21, 7667, 19937, 19938, 19939, 4799, 5479, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 19936 (BansEmpty)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4799 */;
import FastImageDefault from "FastImage" /* 5479 */;
import _mod7667 from "module_7667" /* 7667 */;
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
  const obj = _mod7667;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useBansEmptySource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7667;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function BansEmpty(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7667;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
