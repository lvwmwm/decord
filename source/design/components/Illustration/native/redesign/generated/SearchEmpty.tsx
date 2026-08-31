// Module ID: 9116
// Function ID: 9117
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 8874, 9117, 9118, 9119, 1363, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 9116 (getSearchEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8874 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9117);
    },
    darker() {
      return callback(9118);
    },
    light() {
      return callback(9119);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9117);
    },
    darker() {
      return callback(9118);
    },
    light() {
      return callback(9119);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9117);
    },
    darker() {
      return callback(9118);
    },
    light() {
      return callback(9119);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
