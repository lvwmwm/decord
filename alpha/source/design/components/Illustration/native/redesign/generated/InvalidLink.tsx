// Module ID: 12315
// Function ID: 12316
// Name: InvalidLink
// Dependencies: [19, 21, 8567, 11961, 12316, 11962, 5050, 5730, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 12315 (InvalidLink)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8567 from "module_8567" /* 8567 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export function getInvalidLinkSource(theme) {
  const obj = _mod8567;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useInvalidLinkSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8567;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function InvalidLink(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8567;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
