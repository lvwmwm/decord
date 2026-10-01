// Module ID: 13047
// Function ID: 13048
// Name: Tier048Px
// Dependencies: [19, 17, 21, 7679, 13048, 13049, 13050, 4685, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13047 (Tier048Px)
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  const obj = _mod7679;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  const merged = Object.assign(arg0);
  return <Image source={illustrationSource} />;
};
