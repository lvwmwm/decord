// Module ID: 8547
// Function ID: 68106
// Name: getNoResultsSource
// Dependencies: [31, 27, 33, 7405, 8548, 8549, 8550, 3976, 2]
// Exports: NoResults

// Module 8547 (getNoResultsSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoResultsSource(theme) {
  let obj = require(7405) /* getIllustrationSource */;
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
function useNoResultsSource() {
  return getNoResultsSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export { getNoResultsSource };
export { useNoResultsSource };
export const NoResults = function NoResults(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoResultsSource();
  return <Image />;
};
