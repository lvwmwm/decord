// Module ID: 12552
// Function ID: 97097
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [31, 27, 33, 7403, 12553, 12554, 12555, 3976, 2]
// Exports: GuildSubscriptionRemoval

// Module 12552 (getGuildSubscriptionRemovalSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getGuildSubscriptionRemovalSource(theme) {
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
function useGuildSubscriptionRemovalSource() {
  return getGuildSubscriptionRemovalSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
