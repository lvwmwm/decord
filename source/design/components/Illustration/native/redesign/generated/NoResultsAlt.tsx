// Module ID: 9743
// Function ID: 9744
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 8926, 9744, 9745, 7786, 1362, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9743 (getNoResultsAltSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9744);
    },
    darker() {
      return callback(9745);
    },
    light() {
      return callback(7786);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9744);
    },
    darker() {
      return callback(9745);
    },
    light() {
      return callback(7786);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9744);
    },
    darker() {
      return callback(9745);
    },
    light() {
      return callback(7786);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
