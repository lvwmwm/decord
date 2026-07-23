// Module ID: 8430
// Function ID: 67171
// Name: getNoResultsAltSource
// Dependencies: [31, 27, 33, 7403, 8431, 8432, 8433, 3976, 2]
// Exports: NoResultsAlt

// Module 8430 (getNoResultsAltSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoResultsAltSource(theme) {
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
function useNoResultsAltSource() {
  return getNoResultsAltSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export { getNoResultsAltSource };
export { useNoResultsAltSource };
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoResultsAltSource();
  return <Image />;
};
