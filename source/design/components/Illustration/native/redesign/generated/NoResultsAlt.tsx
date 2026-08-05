// Module ID: 8908
// Function ID: 8909
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 7516, 8909, 8910, 8308, 4101, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 8908 (getNoResultsAltSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8909);
    },
    darker() {
      return callback(8910);
    },
    light() {
      return callback(8308);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8909);
    },
    darker() {
      return callback(8910);
    },
    light() {
      return callback(8308);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8909);
    },
    darker() {
      return callback(8910);
    },
    light() {
      return callback(8308);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
