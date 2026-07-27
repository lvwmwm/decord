// Module ID: 12473
// Function ID: 96749
// Name: getTier048PxSource
// Dependencies: [31, 27, 33, 6481, 12474, 12475, 12476, 3977, 2]
// Exports: Tier048Px

// Module 12473 (getTier048PxSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getTier048PxSource(theme) {
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
function useTier048PxSource() {
  return getTier048PxSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export { getTier048PxSource };
export { useTier048PxSource };
export const Tier048Px = function Tier048Px(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useTier048PxSource();
  return <Image />;
};
