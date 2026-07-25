// Module ID: 13767
// Function ID: 105624
// Name: getBlockedSource
// Dependencies: [31, 27, 33, 6481, 13768, 13769, 13770, 3977, 2]
// Exports: Blocked

// Module 13767 (getBlockedSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getBlockedSource(theme) {
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
function useBlockedSource() {
  return getBlockedSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export { getBlockedSource };
export { useBlockedSource };
export const Blocked = function Blocked(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useBlockedSource();
  return <Image />;
};
