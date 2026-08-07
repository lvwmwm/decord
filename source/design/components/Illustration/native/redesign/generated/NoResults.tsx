// Module ID: 8767
// Function ID: 8768
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7563, 8768, 8769, 8770, 4147, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8767 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8768);
    },
    darker() {
      return callback(8769);
    },
    light() {
      return callback(8770);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8768);
    },
    darker() {
      return callback(8769);
    },
    light() {
      return callback(8770);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8768);
    },
    darker() {
      return callback(8769);
    },
    light() {
      return callback(8770);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
