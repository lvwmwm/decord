// Module ID: 13430
// Function ID: 13431
// Name: NoMutualServers
// Dependencies: [19, 21, 7697, 13431, 13432, 13433, 4830, 5510, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 13430 (NoMutualServers)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export function getNoMutualServersSource(theme) {
  const obj = _mod7697;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useNoMutualServersSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7697;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function NoMutualServers(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7697;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
