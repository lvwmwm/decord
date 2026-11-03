// Module ID: 19447
// Function ID: 19448
// Name: StreamEnded
// Dependencies: [19, 21, 8930, 19448, 19449, 5148, 5837, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 19447 (StreamEnded)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export function getStreamEndedSource(theme) {
  const obj = _mod8930;
  const obj2 = { dark, darker };
  return obj.getIllustrationSource(theme, obj2);
}
export function useStreamEndedSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8930;
  const obj3 = { dark, darker };
  return obj2.getIllustrationSource(theme, obj3);
}
export function StreamEnded(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8930;
  const obj3 = { dark, darker };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
