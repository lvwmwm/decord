// Module ID: 12676
// Function ID: 12677
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 7532, 12677, 12678, 12679, 4101, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 12676 (getGuildSubscriptionNoGuildsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12677);
    },
    darker() {
      return callback(12678);
    },
    light() {
      return callback(12679);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12677);
    },
    darker() {
      return callback(12678);
    },
    light() {
      return callback(12679);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12677);
    },
    darker() {
      return callback(12678);
    },
    light() {
      return callback(12679);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
