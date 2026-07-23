// Module ID: 9516
// Function ID: 74086
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [31, 27, 33, 7403, 9517, 9518, 9519, 3976, 2]
// Exports: FeedbackModalHappyDesaturated

// Module 9516 (getFeedbackModalHappyDesaturatedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
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
  return getFeedbackModalHappyDesaturatedSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
