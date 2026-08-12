// Module ID: 8872
// Function ID: 8873
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7664, 8873, 8874, 8875, 1363, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8872 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8873);
    },
    darker() {
      return callback(8874);
    },
    light() {
      return callback(8875);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8873);
    },
    darker() {
      return callback(8874);
    },
    light() {
      return callback(8875);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8873);
    },
    darker() {
      return callback(8874);
    },
    light() {
      return callback(8875);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
