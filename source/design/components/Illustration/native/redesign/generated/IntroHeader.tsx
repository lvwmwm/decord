// Module ID: 16462
// Function ID: 128371
// Name: getIntroHeaderSource
// Dependencies: [31, 27, 33, 6517, 16463, 16464, 16465, 4011, 2]
// Exports: IntroHeader

// Module 16462 (getIntroHeaderSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getIntroHeaderSource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
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
function useIntroHeaderSource() {
  return getIntroHeaderSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export { getIntroHeaderSource };
export { useIntroHeaderSource };
export const IntroHeader = function IntroHeader(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useIntroHeaderSource();
  return <Image />;
};
