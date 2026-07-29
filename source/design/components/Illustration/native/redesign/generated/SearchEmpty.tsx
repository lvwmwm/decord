// Module ID: 9393
// Function ID: 9394
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 6538, 9394, 9395, 9396, 4035, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 9393 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9394);
    },
    darker() {
      return callback(9395);
    },
    light() {
      return callback(9396);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9394);
    },
    darker() {
      return callback(9395);
    },
    light() {
      return callback(9396);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9394);
    },
    darker() {
      return callback(9395);
    },
    light() {
      return callback(9396);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
