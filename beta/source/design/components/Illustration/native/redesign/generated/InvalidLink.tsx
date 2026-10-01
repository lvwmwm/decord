// Module ID: 11274
// Function ID: 11275
// Name: InvalidLink
// Dependencies: [19, 17, 21, 7679, 10998, 11275, 10999, 4685, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11274 (InvalidLink)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
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
const Image = react_native.Image;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  const obj = _mod7679;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  const merged = Object.assign(arg0);
  return <Image source={illustrationSource} />;
};
