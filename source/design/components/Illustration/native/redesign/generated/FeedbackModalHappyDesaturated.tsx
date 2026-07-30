// Module ID: 9533
// Function ID: 9534
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [19, 17, 21, 6535, 9534, 9535, 9536, 4035, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 9533 (getFeedbackModalHappyDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9534);
    },
    darker() {
      return callback(9535);
    },
    light() {
      return callback(9536);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9534);
    },
    darker() {
      return callback(9535);
    },
    light() {
      return callback(9536);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9534);
    },
    darker() {
      return callback(9535);
    },
    light() {
      return callback(9536);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
