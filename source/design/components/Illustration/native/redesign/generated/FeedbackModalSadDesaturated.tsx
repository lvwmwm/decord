// Module ID: 10817
// Function ID: 10818
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [19, 17, 21, 7907, 10818, 10819, 10820, 1363, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 10817 (getFeedbackModalSadDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10818);
    },
    darker() {
      return callback(10819);
    },
    light() {
      return callback(10820);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10818);
    },
    darker() {
      return callback(10819);
    },
    light() {
      return callback(10820);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10818);
    },
    darker() {
      return callback(10819);
    },
    light() {
      return callback(10820);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
