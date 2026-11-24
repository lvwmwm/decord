// Module ID: 19886
// Function ID: 19887
// Name: IntroHeader
// Dependencies: [19, 21, 7786, 19887, 19888, 19889, 4920, 5600, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 19886 (IntroHeader)
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export function getIntroHeaderSource(theme) {
  const obj = _mod7786;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useIntroHeaderSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7786;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function IntroHeader(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7786;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
