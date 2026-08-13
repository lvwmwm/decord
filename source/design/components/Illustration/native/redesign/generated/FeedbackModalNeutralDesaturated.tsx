// Module ID: 11072
// Function ID: 11073
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: [19, 17, 21, 7668, 11073, 11074, 11075, 1363, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 11072 (getFeedbackModalNeutralDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11073);
    },
    darker() {
      return callback(11074);
    },
    light() {
      return callback(11075);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11073);
    },
    darker() {
      return callback(11074);
    },
    light() {
      return callback(11075);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11073);
    },
    darker() {
      return callback(11074);
    },
    light() {
      return callback(11075);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
