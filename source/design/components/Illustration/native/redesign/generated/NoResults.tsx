// Module ID: 8833
// Function ID: 8834
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7625, 8834, 8835, 8836, 1363, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8833 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8834);
    },
    darker() {
      return callback(8835);
    },
    light() {
      return callback(8836);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8834);
    },
    darker() {
      return callback(8835);
    },
    light() {
      return callback(8836);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8834);
    },
    darker() {
      return callback(8835);
    },
    light() {
      return callback(8836);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
