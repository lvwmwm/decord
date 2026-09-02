// Module ID: 11440
// Function ID: 11441
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [19, 17, 21, 8926, 11441, 11442, 11443, 1362, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 11440 (getFeedbackModalSadDesaturatedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11441);
    },
    darker() {
      return callback(11442);
    },
    light() {
      return callback(11443);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11441);
    },
    darker() {
      return callback(11442);
    },
    light() {
      return callback(11443);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11441);
    },
    darker() {
      return callback(11442);
    },
    light() {
      return callback(11443);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
