// Module ID: 12557
// Function ID: 12558
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 6535, 12558, 12559, 12560, 4035, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 12557 (getGuildSubscriptionNoGuildsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12558);
    },
    darker() {
      return callback(12559);
    },
    light() {
      return callback(12560);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12558);
    },
    darker() {
      return callback(12559);
    },
    light() {
      return callback(12560);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12558);
    },
    darker() {
      return callback(12559);
    },
    light() {
      return callback(12560);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
