// Module ID: 19481
// Function ID: 19482
// Name: StreamEnded
// Dependencies: [19, 21, 8524, 19482, 19483, 5019, 5699, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 19481 (StreamEnded)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5019 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _mod8524 from "module_8524" /* 8524 */;
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
  const obj = _mod8524;
  const obj2 = { dark, darker };
  return obj.getIllustrationSource(theme, obj2);
}
export function useStreamEndedSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8524;
  const obj3 = { dark, darker };
  return obj2.getIllustrationSource(theme, obj3);
}
export function StreamEnded(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8524;
  const obj3 = { dark, darker };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
