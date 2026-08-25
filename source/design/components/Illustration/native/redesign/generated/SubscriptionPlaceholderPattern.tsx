// Module ID: 12977
// Function ID: 12978
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [19, 17, 21, 7767, 12978, 12979, 12980, 1363, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 12977 (getSubscriptionPlaceholderPatternSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12978);
    },
    darker() {
      return callback(12979);
    },
    light() {
      return callback(12980);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12978);
    },
    darker() {
      return callback(12979);
    },
    light() {
      return callback(12980);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12978);
    },
    darker() {
      return callback(12979);
    },
    light() {
      return callback(12980);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
