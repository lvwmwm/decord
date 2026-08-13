// Module ID: 8876
// Function ID: 8877
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7668, 8877, 8878, 8879, 1363, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8876 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8877);
    },
    darker() {
      return callback(8878);
    },
    light() {
      return callback(8879);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8877);
    },
    darker() {
      return callback(8878);
    },
    light() {
      return callback(8879);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8877);
    },
    darker() {
      return callback(8878);
    },
    light() {
      return callback(8879);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
