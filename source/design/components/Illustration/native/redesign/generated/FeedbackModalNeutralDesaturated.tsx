// Module ID: 9528
// Function ID: 9529
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: [19, 17, 21, 6535, 9529, 9530, 9531, 4035, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 9528 (getFeedbackModalNeutralDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9529);
    },
    darker() {
      return callback(9530);
    },
    light() {
      return callback(9531);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9529);
    },
    darker() {
      return callback(9530);
    },
    light() {
      return callback(9531);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9529);
    },
    darker() {
      return callback(9530);
    },
    light() {
      return callback(9531);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
