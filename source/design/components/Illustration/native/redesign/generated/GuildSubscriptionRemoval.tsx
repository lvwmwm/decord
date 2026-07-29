// Module ID: 12680
// Function ID: 12681
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [19, 17, 21, 6538, 12681, 12682, 12683, 4035, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 12680 (getGuildSubscriptionRemovalSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12681);
    },
    darker() {
      return callback(12682);
    },
    light() {
      return callback(12683);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12681);
    },
    darker() {
      return callback(12682);
    },
    light() {
      return callback(12683);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12681);
    },
    darker() {
      return callback(12682);
    },
    light() {
      return callback(12683);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
