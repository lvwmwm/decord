// Module ID: 9059
// Function ID: 9060
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 7664, 9060, 9061, 8570, 1363, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9059 (getNoResultsAltSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9060);
    },
    darker() {
      return callback(9061);
    },
    light() {
      return callback(8570);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9060);
    },
    darker() {
      return callback(9061);
    },
    light() {
      return callback(8570);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9060);
    },
    darker() {
      return callback(9061);
    },
    light() {
      return callback(8570);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
