// Module ID: 13274
// Function ID: 13275
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [19, 17, 21, 8911, 13275, 13276, 13277, 1363, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13274 (getGuildSubscriptionRemovalSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8911 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13275);
    },
    darker() {
      return callback(13276);
    },
    light() {
      return callback(13277);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13275);
    },
    darker() {
      return callback(13276);
    },
    light() {
      return callback(13277);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13275);
    },
    darker() {
      return callback(13276);
    },
    light() {
      return callback(13277);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
