// Module ID: 14810
// Function ID: 112945
// Name: getWumpTrashSource
// Dependencies: [31, 27, 33, 7405, 14811, 14812, 3976, 2]
// Exports: WumpTrash

// Module 14810 (getWumpTrashSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWumpTrashSource(theme) {
  let obj = require(7405) /* getIllustrationSource */;
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
