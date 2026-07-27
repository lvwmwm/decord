// Module ID: 12468
// Function ID: 96736
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [31, 27, 33, 6481, 12469, 12470, 12471, 3977, 2]
// Exports: SubscriptionPlaceholderPattern

// Module 12468 (getSubscriptionPlaceholderPatternSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getSubscriptionPlaceholderPatternSource(theme) {
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
function useSubscriptionPlaceholderPatternSource() {
  return getSubscriptionPlaceholderPatternSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
