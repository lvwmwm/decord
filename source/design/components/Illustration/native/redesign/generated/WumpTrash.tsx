// Module ID: 14866
// Function ID: 113251
// Name: getWumpTrashSource
// Dependencies: [31, 27, 33, 6517, 14867, 14868, 4011, 2]
// Exports: WumpTrash

// Module 14866 (getWumpTrashSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWumpTrashSource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useWumpTrashSource() {
  return getWumpTrashSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export { getWumpTrashSource };
export { useWumpTrashSource };
export const WumpTrash = function WumpTrash(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useWumpTrashSource();
  return <Image />;
};
