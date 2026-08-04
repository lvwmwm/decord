// Module ID: 11007
// Function ID: 11008
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [19, 17, 21, 7544, 11008, 11009, 11010, 4131, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 11007 (getFeedbackModalSadDesaturatedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11008);
    },
    darker() {
      return callback(11009);
    },
    light() {
      return callback(11010);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11008);
    },
    darker() {
      return callback(11009);
    },
    light() {
      return callback(11010);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11008);
    },
    darker() {
      return callback(11009);
    },
    light() {
      return callback(11010);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
