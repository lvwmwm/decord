// Module ID: 9369
// Function ID: 73049
// Name: getSearchEmptySource
// Dependencies: [31, 27, 33, 6517, 9370, 9371, 9372, 4011, 2]
// Exports: SearchEmpty

// Module 9369 (getSearchEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getSearchEmptySource(theme) {
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
function useSearchEmptySource() {
  return getSearchEmptySource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export { getSearchEmptySource };
export { useSearchEmptySource };
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useSearchEmptySource();
  return <Image />;
};
