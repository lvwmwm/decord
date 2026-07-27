// Module ID: 12484
// Function ID: 96772
// Name: getTopPatternSource
// Dependencies: [31, 27, 33, 6481, 12485, 12486, 12487, 3977, 2]
// Exports: TopPattern

// Module 12484 (getTopPatternSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getTopPatternSource(theme) {
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
function useTopPatternSource() {
  return getTopPatternSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export { getTopPatternSource };
export { useTopPatternSource };
export const TopPattern = function TopPattern(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useTopPatternSource();
  return <Image />;
};
