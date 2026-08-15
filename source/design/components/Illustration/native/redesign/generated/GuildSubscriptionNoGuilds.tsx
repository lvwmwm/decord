// Module ID: 12964
// Function ID: 12965
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 7907, 12965, 12966, 12967, 1363, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 12964 (getGuildSubscriptionNoGuildsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12965);
    },
    darker() {
      return callback(12966);
    },
    light() {
      return callback(12967);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12965);
    },
    darker() {
      return callback(12966);
    },
    light() {
      return callback(12967);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12965);
    },
    darker() {
      return callback(12966);
    },
    light() {
      return callback(12967);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
