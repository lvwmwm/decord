// Module ID: 11031
// Function ID: 11032
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: [19, 17, 21, 7563, 11032, 11033, 11034, 4147, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 11031 (getFeedbackModalNeutralDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11032);
    },
    darker() {
      return callback(11033);
    },
    light() {
      return callback(11034);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11032);
    },
    darker() {
      return callback(11033);
    },
    light() {
      return callback(11034);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11032);
    },
    darker() {
      return callback(11033);
    },
    light() {
      return callback(11034);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
