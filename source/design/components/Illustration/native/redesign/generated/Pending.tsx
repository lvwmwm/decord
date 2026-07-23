// Module ID: 15571
// Function ID: 120066
// Name: getPendingSource
// Dependencies: [31, 27, 33, 7403, 15572, 15573, 15574, 3976, 2]
// Exports: Pending

// Module 15571 (getPendingSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getPendingSource(theme) {
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
function usePendingSource() {
  return getPendingSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export { getPendingSource };
export { usePendingSource };
export const Pending = function Pending(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = usePendingSource();
  return <Image />;
};
