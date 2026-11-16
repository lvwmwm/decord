// Module ID: 10188
// Function ID: 10189
// Name: SearchEmpty
// Dependencies: [19, 21, 8913, 10189, 10190, 10191, 5177, 5874, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10188 (SearchEmpty)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5177 */;
import FastImageDefault from "FastImage" /* 5874 */;
import _mod8913 from "module_8913" /* 8913 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  const obj = _mod8913;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useSearchEmptySource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8913;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8913;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
