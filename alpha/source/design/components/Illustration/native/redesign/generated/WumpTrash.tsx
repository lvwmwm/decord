// Module ID: 17965
// Function ID: 17966
// Name: WumpTrash
// Dependencies: [19, 21, 8798, 17966, 17967, 5016, 5712, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 17965 (WumpTrash)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5016 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _mod8798 from "module_8798" /* 8798 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function dark() {
  return require("AssetRegistry");
}
function darker() {
  return require("AssetRegistry");
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export function getWumpTrashSource(theme) {
  const obj = _mod8798;
  const obj2 = { dark, darker };
  return obj.getIllustrationSource(theme, obj2);
}
export function useWumpTrashSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8798;
  const obj3 = { dark, darker };
  return obj2.getIllustrationSource(theme, obj3);
}
export function WumpTrash(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8798;
  const obj3 = { dark, darker };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
