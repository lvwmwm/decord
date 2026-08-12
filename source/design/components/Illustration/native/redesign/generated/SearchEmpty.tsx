// Module ID: 8761
// Function ID: 8762
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7664, 8762, 8763, 8764, 1363, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8761 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8762);
    },
    darker() {
      return callback(8763);
    },
    light() {
      return callback(8764);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8762);
    },
    darker() {
      return callback(8763);
    },
    light() {
      return callback(8764);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8762);
    },
    darker() {
      return callback(8763);
    },
    light() {
      return callback(8764);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
