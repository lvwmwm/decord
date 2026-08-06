// Module ID: 8750
// Function ID: 8751
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7544, 8751, 8752, 8753, 4130, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8750 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8751);
    },
    darker() {
      return callback(8752);
    },
    light() {
      return callback(8753);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8751);
    },
    darker() {
      return callback(8752);
    },
    light() {
      return callback(8753);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8751);
    },
    darker() {
      return callback(8752);
    },
    light() {
      return callback(8753);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
