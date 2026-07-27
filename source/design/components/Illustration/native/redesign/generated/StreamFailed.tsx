// Module ID: 10489
// Function ID: 81354
// Name: getStreamFailedSource
// Dependencies: [31, 27, 33, 6481, 10490, 10491, 3977, 2]
// Exports: StreamFailed

// Module 10489 (getStreamFailedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getStreamFailedSource(theme) {
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
function useStreamFailedSource() {
  return getStreamFailedSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
