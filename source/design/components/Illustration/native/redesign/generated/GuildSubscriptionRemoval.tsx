// Module ID: 13617
// Function ID: 13618
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [19, 17, 21, 8233, 13618, 13619, 13620, 4411, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13617 (getGuildSubscriptionRemovalSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13618);
    },
    darker() {
      return callback(13619);
    },
    light() {
      return callback(13620);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13618);
    },
    darker() {
      return callback(13619);
    },
    light() {
      return callback(13620);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13618);
    },
    darker() {
      return callback(13619);
    },
    light() {
      return callback(13620);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
