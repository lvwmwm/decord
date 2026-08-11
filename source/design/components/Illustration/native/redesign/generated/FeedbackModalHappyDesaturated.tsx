// Module ID: 11108
// Function ID: 11109
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [19, 17, 21, 7625, 11109, 11110, 11111, 1363, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 11108 (getFeedbackModalHappyDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11109);
    },
    darker() {
      return callback(11110);
    },
    light() {
      return callback(11111);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11109);
    },
    darker() {
      return callback(11110);
    },
    light() {
      return callback(11111);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11109);
    },
    darker() {
      return callback(11110);
    },
    light() {
      return callback(11111);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
