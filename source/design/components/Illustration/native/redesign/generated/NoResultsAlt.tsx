// Module ID: 9689
// Function ID: 9690
// Name: getNoResultsAltSource
// Dependencies: [19, 17, 21, 8164, 9690, 9691, 6994, 1362, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9689 (getNoResultsAltSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9690);
    },
    darker() {
      return callback(9691);
    },
    light() {
      return callback(6994);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9690);
    },
    darker() {
      return callback(9691);
    },
    light() {
      return callback(6994);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9690);
    },
    darker() {
      return callback(9691);
    },
    light() {
      return callback(6994);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
