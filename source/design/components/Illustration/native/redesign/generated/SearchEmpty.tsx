// Module ID: 8610
// Function ID: 8611
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 7516, 8611, 8612, 8613, 4101, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 8610 (getSearchEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8611);
    },
    darker() {
      return callback(8612);
    },
    light() {
      return callback(8613);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8611);
    },
    darker() {
      return callback(8612);
    },
    light() {
      return callback(8613);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8611);
    },
    darker() {
      return callback(8612);
    },
    light() {
      return callback(8613);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
