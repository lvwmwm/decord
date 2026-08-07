// Module ID: 8656
// Function ID: 8657
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7563, 8657, 8658, 8659, 4147, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8656 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8657);
    },
    darker() {
      return callback(8658);
    },
    light() {
      return callback(8659);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8657);
    },
    darker() {
      return callback(8658);
    },
    light() {
      return callback(8659);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8657);
    },
    darker() {
      return callback(8658);
    },
    light() {
      return callback(8659);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
