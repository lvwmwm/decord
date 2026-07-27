// Module ID: 16416
// Function ID: 128159
// Name: getBansEmptySource
// Dependencies: [31, 27, 33, 6481, 16417, 16418, 16419, 3977, 2]
// Exports: BansEmpty

// Module 16416 (getBansEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getBansEmptySource(theme) {
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
function useBansEmptySource() {
  return getBansEmptySource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export { getBansEmptySource };
export { useBansEmptySource };
export const BansEmpty = function BansEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useBansEmptySource();
  return <Image />;
};
