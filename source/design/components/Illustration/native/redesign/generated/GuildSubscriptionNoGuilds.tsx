// Module ID: 13412
// Function ID: 13413
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 8926, 13413, 13414, 13415, 1362, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 13412 (getGuildSubscriptionNoGuildsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13413);
    },
    darker() {
      return callback(13414);
    },
    light() {
      return callback(13415);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13413);
    },
    darker() {
      return callback(13414);
    },
    light() {
      return callback(13415);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13413);
    },
    darker() {
      return callback(13414);
    },
    light() {
      return callback(13415);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
