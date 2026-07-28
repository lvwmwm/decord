// Module ID: 10524
// Function ID: 81467
// Name: getStreamEndedSource
// Dependencies: [31, 27, 33, 6517, 10525, 10526, 4011, 2]
// Exports: StreamEnded

// Module 10524 (getStreamEndedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getStreamEndedSource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useStreamEndedSource() {
  return getStreamEndedSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export { getStreamEndedSource };
export { useStreamEndedSource };
export const StreamEnded = function StreamEnded(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useStreamEndedSource();
  return <Image />;
};
