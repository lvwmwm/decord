// Module ID: 10485
// Function ID: 81341
// Name: getStreamEndedSource
// Dependencies: [31, 27, 33, 6481, 10486, 10487, 3977, 2]
// Exports: StreamEnded

// Module 10485 (getStreamEndedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getStreamEndedSource(theme) {
  let obj = require(6481) /* getIllustrationSource */;
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
  return getStreamEndedSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
