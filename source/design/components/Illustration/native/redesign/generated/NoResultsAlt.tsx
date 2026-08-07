// Module ID: 8954
// Function ID: 8955
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 7563, 8955, 8956, 8465, 4147, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 8954 (getNoResultsAltSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8955);
    },
    darker() {
      return callback(8956);
    },
    light() {
      return callback(8465);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8955);
    },
    darker() {
      return callback(8956);
    },
    light() {
      return callback(8465);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8955);
    },
    darker() {
      return callback(8956);
    },
    light() {
      return callback(8465);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
