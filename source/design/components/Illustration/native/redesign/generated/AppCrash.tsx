// Module ID: 9962
// Function ID: 9963
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 8926, 9963, 9964, 9965, 1362, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9962 (getAppCrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9963);
    },
    darker() {
      return callback(9964);
    },
    light() {
      return callback(9965);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9963);
    },
    darker() {
      return callback(9964);
    },
    light() {
      return callback(9965);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9963);
    },
    darker() {
      return callback(9964);
    },
    light() {
      return callback(9965);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
