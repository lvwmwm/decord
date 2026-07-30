// Module ID: 12527
// Function ID: 12528
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [19, 17, 21, 6535, 12528, 12529, 12530, 4035, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 12527 (getSubscriptionPlaceholderPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12528);
    },
    darker() {
      return callback(12529);
    },
    light() {
      return callback(12530);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12528);
    },
    darker() {
      return callback(12529);
    },
    light() {
      return callback(12530);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12528);
    },
    darker() {
      return callback(12529);
    },
    light() {
      return callback(12530);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
