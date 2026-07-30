// Module ID: 8366
// Function ID: 8367
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 6535, 8367, 8368, 8369, 4035, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8366 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8367);
    },
    darker() {
      return callback(8368);
    },
    light() {
      return callback(8369);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8367);
    },
    darker() {
      return callback(8368);
    },
    light() {
      return callback(8369);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8367);
    },
    darker() {
      return callback(8368);
    },
    light() {
      return callback(8369);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
