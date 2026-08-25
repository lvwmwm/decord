// Module ID: 16997
// Function ID: 16998
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7767, 16998, 16999, 17000, 1363, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16997 (getBansEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16998);
    },
    darker() {
      return callback(16999);
    },
    light() {
      return callback(17000);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16998);
    },
    darker() {
      return callback(16999);
    },
    light() {
      return callback(17000);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16998);
    },
    darker() {
      return callback(16999);
    },
    light() {
      return callback(17000);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
