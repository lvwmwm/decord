// Module ID: 10571
// Function ID: 82542
// Name: getStreamFailedSource
// Dependencies: [31, 27, 33, 7403, 10572, 10573, 3976, 2]
// Exports: StreamFailed

// Module 10571 (getStreamFailedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getStreamFailedSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
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
