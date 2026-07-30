// Module ID: 12674
// Function ID: 12675
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [19, 17, 21, 6535, 12675, 12676, 12677, 4035, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 12674 (getGuildSubscriptionRemovalSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12675);
    },
    darker() {
      return callback(12676);
    },
    light() {
      return callback(12677);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12675);
    },
    darker() {
      return callback(12676);
    },
    light() {
      return callback(12677);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12675);
    },
    darker() {
      return callback(12676);
    },
    light() {
      return callback(12677);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
