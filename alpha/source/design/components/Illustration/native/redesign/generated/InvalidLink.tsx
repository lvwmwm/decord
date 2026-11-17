// Module ID: 12872
// Function ID: 12873
// Name: InvalidLink
// Dependencies: [19, 21, 8194, 12604, 12873, 12605, 5317, 6014, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 12872 (InvalidLink)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
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
  const obj = _mod8194;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useInvalidLinkSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8194;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function InvalidLink(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8194;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
