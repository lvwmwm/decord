// Module ID: 12954
// Function ID: 12955
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [19, 17, 21, 7664, 12955, 12956, 12957, 1363, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 12954 (getGuildSubscriptionRemovalSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12955);
    },
    darker() {
      return callback(12956);
    },
    light() {
      return callback(12957);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12955);
    },
    darker() {
      return callback(12956);
    },
    light() {
      return callback(12957);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12955);
    },
    darker() {
      return callback(12956);
    },
    light() {
      return callback(12957);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
