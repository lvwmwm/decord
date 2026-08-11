// Module ID: 12809
// Function ID: 12810
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 7625, 12810, 12811, 12812, 1363, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 12809 (getGuildSubscriptionNoGuildsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12810);
    },
    darker() {
      return callback(12811);
    },
    light() {
      return callback(12812);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12810);
    },
    darker() {
      return callback(12811);
    },
    light() {
      return callback(12812);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12810);
    },
    darker() {
      return callback(12811);
    },
    light() {
      return callback(12812);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
