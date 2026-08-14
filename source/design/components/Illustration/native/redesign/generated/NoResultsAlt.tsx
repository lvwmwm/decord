// Module ID: 9077
// Function ID: 9078
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 7689, 9078, 9079, 8596, 1363, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9077 (getNoResultsAltSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9078);
    },
    darker() {
      return callback(9079);
    },
    light() {
      return callback(8596);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9078);
    },
    darker() {
      return callback(9079);
    },
    light() {
      return callback(8596);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9078);
    },
    darker() {
      return callback(9079);
    },
    light() {
      return callback(8596);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
