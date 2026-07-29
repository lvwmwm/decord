// Module ID: 8369
// Function ID: 8370
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 6538, 8370, 8371, 8372, 4035, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8369 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8370);
    },
    darker() {
      return callback(8371);
    },
    light() {
      return callback(8372);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8370);
    },
    darker() {
      return callback(8371);
    },
    light() {
      return callback(8372);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8370);
    },
    darker() {
      return callback(8371);
    },
    light() {
      return callback(8372);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
