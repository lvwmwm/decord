// Module ID: 8827
// Function ID: 8828
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7623, 8828, 8829, 8830, 4153, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8827 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8828);
    },
    darker() {
      return callback(8829);
    },
    light() {
      return callback(8830);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8828);
    },
    darker() {
      return callback(8829);
    },
    light() {
      return callback(8830);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8828);
    },
    darker() {
      return callback(8829);
    },
    light() {
      return callback(8830);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
