// Module ID: 12688
// Function ID: 12689
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [19, 17, 21, 7544, 12689, 12690, 12691, 4130, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 12688 (getSubscriptionPlaceholderPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12689);
    },
    darker() {
      return callback(12690);
    },
    light() {
      return callback(12691);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12689);
    },
    darker() {
      return callback(12690);
    },
    light() {
      return callback(12691);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12689);
    },
    darker() {
      return callback(12690);
    },
    light() {
      return callback(12691);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
