// Module ID: 11156
// Function ID: 11157
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: [19, 17, 21, 7664, 11157, 11158, 11159, 1363, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 11156 (getFeedbackModalNeutralDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11157);
    },
    darker() {
      return callback(11158);
    },
    light() {
      return callback(11159);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11157);
    },
    darker() {
      return callback(11158);
    },
    light() {
      return callback(11159);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11157);
    },
    darker() {
      return callback(11158);
    },
    light() {
      return callback(11159);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
