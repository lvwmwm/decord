// Module ID: 8974
// Function ID: 8975
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7907, 8975, 8976, 8977, 1363, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8974 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8975);
    },
    darker() {
      return callback(8976);
    },
    light() {
      return callback(8977);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8975);
    },
    darker() {
      return callback(8976);
    },
    light() {
      return callback(8977);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8975);
    },
    darker() {
      return callback(8976);
    },
    light() {
      return callback(8977);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
