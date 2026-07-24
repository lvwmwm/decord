// Module ID: 12491
// Function ID: 96893
// Name: getTier048PxSource
// Dependencies: [31, 27, 33, 7405, 12492, 12493, 12494, 3976, 2]
// Exports: Tier048Px

// Module 12491 (getTier048PxSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getTier048PxSource(theme) {
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
function useTier048PxSource() {
  return getTier048PxSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
