// Module ID: 9551
// Function ID: 9552
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7532, 9552, 9553, 9554, 4101, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 9551 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9552);
    },
    darker() {
      return callback(9553);
    },
    light() {
      return callback(9554);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9552);
    },
    darker() {
      return callback(9553);
    },
    light() {
      return callback(9554);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9552);
    },
    darker() {
      return callback(9553);
    },
    light() {
      return callback(9554);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
