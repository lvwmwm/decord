// Module ID: 9473
// Function ID: 73882
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [31, 27, 33, 6481, 9474, 9475, 9476, 3977, 2]
// Exports: FeedbackModalHappyDesaturated

// Module 9473 (getFeedbackModalHappyDesaturatedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = require(6481) /* getIllustrationSource */;
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
function useFeedbackModalHappyDesaturatedSource() {
  return getFeedbackModalHappyDesaturatedSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export { getFeedbackModalHappyDesaturatedSource };
export { useFeedbackModalHappyDesaturatedSource };
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useFeedbackModalHappyDesaturatedSource();
  return <Image />;
};
