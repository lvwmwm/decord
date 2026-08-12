// Module ID: 11161
// Function ID: 11162
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [19, 17, 21, 7664, 11162, 11163, 11164, 1363, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 11161 (getFeedbackModalHappyDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11162);
    },
    darker() {
      return callback(11163);
    },
    light() {
      return callback(11164);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11162);
    },
    darker() {
      return callback(11163);
    },
    light() {
      return callback(11164);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11162);
    },
    darker() {
      return callback(11163);
    },
    light() {
      return callback(11164);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
