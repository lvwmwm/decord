// Module ID: 15618
// Function ID: 120388
// Name: getPendingSource
// Dependencies: [31, 27, 33, 7405, 15619, 15620, 15621, 3976, 2]
// Exports: Pending

// Module 15618 (getPendingSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getPendingSource(theme) {
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
