// Module ID: 8722
// Function ID: 8723
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7625, 8723, 8724, 8725, 1363, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8722 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8723);
    },
    darker() {
      return callback(8724);
    },
    light() {
      return callback(8725);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8723);
    },
    darker() {
      return callback(8724);
    },
    light() {
      return callback(8725);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8723);
    },
    darker() {
      return callback(8724);
    },
    light() {
      return callback(8725);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
