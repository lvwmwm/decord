// Module ID: 14763
// Function ID: 112624
// Name: getWumpTrashSource
// Dependencies: [31, 27, 33, 7403, 14764, 14765, 3976, 2]
// Exports: WumpTrash

// Module 14763 (getWumpTrashSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWumpTrashSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
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
  return getWumpTrashSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
