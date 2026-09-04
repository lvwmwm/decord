// Module ID: 13446
// Function ID: 13447
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 8164, 13447, 13448, 13449, 1362, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13446 (getTopPatternSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13447);
    },
    darker() {
      return callback(13448);
    },
    light() {
      return callback(13449);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13447);
    },
    darker() {
      return callback(13448);
    },
    light() {
      return callback(13449);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13447);
    },
    darker() {
      return callback(13448);
    },
    light() {
      return callback(13449);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
