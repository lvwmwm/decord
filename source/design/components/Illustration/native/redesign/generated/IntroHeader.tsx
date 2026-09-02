// Module ID: 17477
// Function ID: 17478
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 8926, 17478, 17479, 17480, 1362, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17477 (getIntroHeaderSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17478);
    },
    darker() {
      return callback(17479);
    },
    light() {
      return callback(17480);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17478);
    },
    darker() {
      return callback(17479);
    },
    light() {
      return callback(17480);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17478);
    },
    darker() {
      return callback(17479);
    },
    light() {
      return callback(17480);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
