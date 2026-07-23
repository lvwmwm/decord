// Module ID: 12463
// Function ID: 96618
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [31, 27, 33, 7403, 12464, 12465, 12466, 3976, 2]
// Exports: GuildSubscriptionNoGuilds

// Module 12463 (getGuildSubscriptionNoGuildsSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getGuildSubscriptionNoGuildsSource(theme) {
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
function useGuildSubscriptionNoGuildsSource() {
  return getGuildSubscriptionNoGuildsSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export { getGuildSubscriptionNoGuildsSource };
export { useGuildSubscriptionNoGuildsSource };
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useGuildSubscriptionNoGuildsSource();
  return <Image />;
};
