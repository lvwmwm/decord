// Module ID: 8877
// Function ID: 8878
// Name: StreamEnded
// Dependencies: [19, 17, 21, 7679, 8878, 8879, 4685, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 8877 (StreamEnded)
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
const Image = react_native.Image;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  const obj = _mod7679;
  const obj2 = { dark, darker };
  return obj.getIllustrationSource(theme, obj2);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker };
  return obj2.getIllustrationSource(theme, obj3);
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7679;
  const obj3 = { dark, darker };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  const merged = Object.assign(arg0);
  return <Image source={illustrationSource} />;
};
