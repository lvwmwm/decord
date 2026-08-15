// Module ID: 10827
// Function ID: 10828
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [19, 17, 21, 7907, 10828, 10829, 10830, 1363, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 10827 (getFeedbackModalHappyDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10828);
    },
    darker() {
      return callback(10829);
    },
    light() {
      return callback(10830);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10828);
    },
    darker() {
      return callback(10829);
    },
    light() {
      return callback(10830);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10828);
    },
    darker() {
      return callback(10829);
    },
    light() {
      return callback(10830);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
