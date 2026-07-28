// Module ID: 9508
// Function ID: 74000
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: [31, 27, 33, 6517, 9509, 9510, 9511, 4011, 2]
// Exports: FeedbackModalNeutralDesaturated

// Module 9508 (getFeedbackModalNeutralDesaturatedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getFeedbackModalNeutralDesaturatedSource(theme) {
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
function useFeedbackModalNeutralDesaturatedSource() {
  return getFeedbackModalNeutralDesaturatedSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export { getFeedbackModalNeutralDesaturatedSource };
export { useFeedbackModalNeutralDesaturatedSource };
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useFeedbackModalNeutralDesaturatedSource();
  return <Image />;
};
