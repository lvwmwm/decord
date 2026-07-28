// Module ID: 9503
// Function ID: 73989
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [31, 27, 33, 6517, 9504, 9505, 9506, 4011, 2]
// Exports: FeedbackModalSadDesaturated

// Module 9503 (getFeedbackModalSadDesaturatedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    },
    light() {
      return outer1_0(outer1_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useFeedbackModalSadDesaturatedSource() {
  return getFeedbackModalSadDesaturatedSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export { getFeedbackModalSadDesaturatedSource };
export { useFeedbackModalSadDesaturatedSource };
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useFeedbackModalSadDesaturatedSource();
  return <Image />;
};
