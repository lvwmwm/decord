// Module ID: 9523
// Function ID: 9524
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [19, 17, 21, 6535, 9524, 9525, 9526, 4035, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 9523 (getFeedbackModalSadDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9524);
    },
    darker() {
      return callback(9525);
    },
    light() {
      return callback(9526);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9524);
    },
    darker() {
      return callback(9525);
    },
    light() {
      return callback(9526);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9524);
    },
    darker() {
      return callback(9525);
    },
    light() {
      return callback(9526);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
