// Module ID: 12993
// Function ID: 12994
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7767, 12994, 12995, 12996, 1363, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12993 (getTopPatternSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12994);
    },
    darker() {
      return callback(12995);
    },
    light() {
      return callback(12996);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12994);
    },
    darker() {
      return callback(12995);
    },
    light() {
      return callback(12996);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12994);
    },
    darker() {
      return callback(12995);
    },
    light() {
      return callback(12996);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
