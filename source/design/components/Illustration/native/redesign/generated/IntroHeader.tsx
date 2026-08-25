// Module ID: 17003
// Function ID: 17004
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7767, 17004, 17005, 17006, 1363, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17003 (getIntroHeaderSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17004);
    },
    darker() {
      return callback(17005);
    },
    light() {
      return callback(17006);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17004);
    },
    darker() {
      return callback(17005);
    },
    light() {
      return callback(17006);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17004);
    },
    darker() {
      return callback(17005);
    },
    light() {
      return callback(17006);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
