// Module ID: 10600
// Function ID: 82734
// Name: getStreamFailedSource
// Dependencies: [31, 27, 33, 7405, 10601, 10602, 3976, 2]
// Exports: StreamFailed

// Module 10600 (getStreamFailedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getStreamFailedSource(theme) {
  let obj = require(7405) /* getIllustrationSource */;
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
function useStreamFailedSource() {
  return getStreamFailedSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export { getStreamFailedSource };
export { useStreamFailedSource };
export const StreamFailed = function StreamFailed(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useStreamFailedSource();
  return <Image />;
};
