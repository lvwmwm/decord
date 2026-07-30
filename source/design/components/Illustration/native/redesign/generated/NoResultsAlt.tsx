// Module ID: 8293
// Function ID: 8294
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 6535, 8294, 8295, 8296, 4035, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 8293 (getNoResultsAltSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8294);
    },
    darker() {
      return callback(8295);
    },
    light() {
      return callback(8296);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8294);
    },
    darker() {
      return callback(8295);
    },
    light() {
      return callback(8296);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8294);
    },
    darker() {
      return callback(8295);
    },
    light() {
      return callback(8296);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
