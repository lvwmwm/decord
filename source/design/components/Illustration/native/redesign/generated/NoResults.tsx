// Module ID: 8749
// Function ID: 8750
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7544, 8750, 8751, 8752, 4131, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8749 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8750);
    },
    darker() {
      return callback(8751);
    },
    light() {
      return callback(8752);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8750);
    },
    darker() {
      return callback(8751);
    },
    light() {
      return callback(8752);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8750);
    },
    darker() {
      return callback(8751);
    },
    light() {
      return callback(8752);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
