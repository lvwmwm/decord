// Module ID: 8779
// Function ID: 8780
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7689, 8780, 8781, 8782, 1363, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8779 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8780);
    },
    darker() {
      return callback(8781);
    },
    light() {
      return callback(8782);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8780);
    },
    darker() {
      return callback(8781);
    },
    light() {
      return callback(8782);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8780);
    },
    darker() {
      return callback(8781);
    },
    light() {
      return callback(8782);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
