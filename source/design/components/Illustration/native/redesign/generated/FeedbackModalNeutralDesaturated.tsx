// Module ID: 11016
// Function ID: 11017
// Name: getFeedbackModalNeutralDesaturatedSource
// Dependencies: [19, 17, 21, 7544, 11017, 11018, 11019, 4130, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 11016 (getFeedbackModalNeutralDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11017);
    },
    darker() {
      return callback(11018);
    },
    light() {
      return callback(11019);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11017);
    },
    darker() {
      return callback(11018);
    },
    light() {
      return callback(11019);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11017);
    },
    darker() {
      return callback(11018);
    },
    light() {
      return callback(11019);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
