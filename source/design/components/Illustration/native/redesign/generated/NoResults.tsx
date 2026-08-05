// Module ID: 8721
// Function ID: 8722
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 7516, 8722, 8723, 8724, 4101, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8721 (getNoResultsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8722);
    },
    darker() {
      return callback(8723);
    },
    light() {
      return callback(8724);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8722);
    },
    darker() {
      return callback(8723);
    },
    light() {
      return callback(8724);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8722);
    },
    darker() {
      return callback(8723);
    },
    light() {
      return callback(8724);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
