// Module ID: 12658
// Function ID: 97720
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [31, 27, 33, 6517, 12659, 12660, 12661, 4011, 2]
// Exports: GuildSubscriptionRemoval

// Module 12658 (getGuildSubscriptionRemovalSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getGuildSubscriptionRemovalSource(theme) {
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
function useGuildSubscriptionRemovalSource() {
  return getGuildSubscriptionRemovalSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export { getGuildSubscriptionRemovalSource };
export { useGuildSubscriptionRemovalSource };
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useGuildSubscriptionRemovalSource();
  return <Image />;
};
