// Module ID: 8639
// Function ID: 8640
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7544, 8640, 8641, 8642, 4130, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8639 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8640);
    },
    darker() {
      return callback(8641);
    },
    light() {
      return callback(8642);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8640);
    },
    darker() {
      return callback(8641);
    },
    light() {
      return callback(8642);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8640);
    },
    darker() {
      return callback(8641);
    },
    light() {
      return callback(8642);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
