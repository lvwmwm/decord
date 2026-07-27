// Module ID: 8307
// Function ID: 66761
// Name: getNoResultsSource
// Dependencies: [31, 27, 33, 6481, 8308, 8309, 8310, 3977, 2]
// Exports: NoResults

// Module 8307 (getNoResultsSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoResultsSource(theme) {
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
function useNoResultsSource() {
  return getNoResultsSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
