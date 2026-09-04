// Module ID: 10246
// Function ID: 10247
// Name: getSearchEmptySource
// Dependencies: [19, 17, 21, 8164, 10247, 10248, 10249, 1362, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10246 (getSearchEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(10247);
    },
    darker() {
      return callback(10248);
    },
    light() {
      return callback(10249);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10247);
    },
    darker() {
      return callback(10248);
    },
    light() {
      return callback(10249);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10247);
    },
    darker() {
      return callback(10248);
    },
    light() {
      return callback(10249);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
