// Module ID: 8890
// Function ID: 8891
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7689, 8891, 8892, 8893, 1363, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8890 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8891);
    },
    darker() {
      return callback(8892);
    },
    light() {
      return callback(8893);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8891);
    },
    darker() {
      return callback(8892);
    },
    light() {
      return callback(8893);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8891);
    },
    darker() {
      return callback(8892);
    },
    light() {
      return callback(8893);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
