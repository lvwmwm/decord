// Module ID: 12868
// Function ID: 12869
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 7664, 12869, 12870, 12871, 1363, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 12868 (getGuildSubscriptionNoGuildsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12869);
    },
    darker() {
      return callback(12870);
    },
    light() {
      return callback(12871);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12869);
    },
    darker() {
      return callback(12870);
    },
    light() {
      return callback(12871);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12869);
    },
    darker() {
      return callback(12870);
    },
    light() {
      return callback(12871);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
