// Module ID: 9685
// Function ID: 9686
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [19, 17, 21, 7532, 9686, 9687, 9688, 4101, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 9685 (getFeedbackModalSadDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9686);
    },
    darker() {
      return callback(9687);
    },
    light() {
      return callback(9688);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9686);
    },
    darker() {
      return callback(9687);
    },
    light() {
      return callback(9688);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9686);
    },
    darker() {
      return callback(9687);
    },
    light() {
      return callback(9688);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
