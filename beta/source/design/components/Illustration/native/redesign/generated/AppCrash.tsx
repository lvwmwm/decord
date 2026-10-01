// Module ID: 9304
// Function ID: 9305
// Name: AppCrash
// Dependencies: [19, 17, 21, 7679, 9305, 9306, 9307, 4685, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9304 (AppCrash)
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  const obj = _mod7679;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  const merged = Object.assign(arg0);
  return <Image source={illustrationSource} />;
};
