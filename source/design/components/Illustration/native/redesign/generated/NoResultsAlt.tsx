// Module ID: 8272
// Function ID: 66164
// Name: getNoResultsAltSource
// Dependencies: [31, 27, 33, 6517, 8273, 8274, 8275, 4011, 2]
// Exports: NoResultsAlt

// Module 8272 (getNoResultsAltSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoResultsAltSource(theme) {
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
function useNoResultsAltSource() {
  return getNoResultsAltSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
