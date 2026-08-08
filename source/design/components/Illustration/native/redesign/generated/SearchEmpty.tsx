// Module ID: 8716
// Function ID: 8717
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7623, 8717, 8718, 8719, 4153, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8716 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8717);
    },
    darker() {
      return callback(8718);
    },
    light() {
      return callback(8719);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8717);
    },
    darker() {
      return callback(8718);
    },
    light() {
      return callback(8719);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8717);
    },
    darker() {
      return callback(8718);
    },
    light() {
      return callback(8719);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
