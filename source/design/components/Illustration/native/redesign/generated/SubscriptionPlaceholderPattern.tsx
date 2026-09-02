// Module ID: 13382
// Function ID: 13383
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [19, 17, 21, 8926, 13383, 13384, 13385, 1362, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 13382 (getSubscriptionPlaceholderPatternSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13383);
    },
    darker() {
      return callback(13384);
    },
    light() {
      return callback(13385);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13383);
    },
    darker() {
      return callback(13384);
    },
    light() {
      return callback(13385);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13383);
    },
    darker() {
      return callback(13384);
    },
    light() {
      return callback(13385);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
