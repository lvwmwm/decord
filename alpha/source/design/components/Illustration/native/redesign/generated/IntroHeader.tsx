// Module ID: 20608
// Function ID: 20609
// Name: IntroHeader
// Dependencies: [19, 21, 8183, 20609, 20610, 20611, 5313, 6020, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 20608 (IntroHeader)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5313 */;
import FastImageDefault from "FastImage" /* 6020 */;
import _mod8183 from "module_8183" /* 8183 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export function getIntroHeaderSource(theme) {
  const obj = _mod8183;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useIntroHeaderSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8183;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function IntroHeader(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8183;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
