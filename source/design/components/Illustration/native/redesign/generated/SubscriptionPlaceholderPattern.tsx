// Module ID: 12486
// Function ID: 96880
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [31, 27, 33, 7405, 12487, 12488, 12489, 3976, 2]
// Exports: SubscriptionPlaceholderPattern

// Module 12486 (getSubscriptionPlaceholderPatternSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getSubscriptionPlaceholderPatternSource(theme) {
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
function useSubscriptionPlaceholderPatternSource() {
  return getSubscriptionPlaceholderPatternSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export { getSubscriptionPlaceholderPatternSource };
export { useSubscriptionPlaceholderPatternSource };
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useSubscriptionPlaceholderPatternSource();
  return <Image />;
};
