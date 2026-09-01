// Module ID: 13190
// Function ID: 13191
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 8911, 13191, 13192, 13193, 1363, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 13190 (getGuildSubscriptionNoGuildsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8911 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13191);
    },
    darker() {
      return callback(13192);
    },
    light() {
      return callback(13193);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13191);
    },
    darker() {
      return callback(13192);
    },
    light() {
      return callback(13193);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13191);
    },
    darker() {
      return callback(13192);
    },
    light() {
      return callback(13193);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
