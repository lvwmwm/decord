// Module ID: 12433
// Function ID: 96557
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [31, 27, 33, 7403, 12434, 12435, 12436, 3976, 2]
// Exports: SubscriptionPlaceholderPattern

// Module 12433 (getSubscriptionPlaceholderPatternSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getSubscriptionPlaceholderPatternSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
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
