// Module ID: 20100
// Function ID: 20101
// Name: IntroHeader
// Dependencies: [19, 21, 8566, 20101, 20102, 20103, 5050, 5730, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 20100 (IntroHeader)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8566 from "module_8566" /* 8566 */;
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
  const obj = _mod8566;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useIntroHeaderSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8566;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function IntroHeader(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8566;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
