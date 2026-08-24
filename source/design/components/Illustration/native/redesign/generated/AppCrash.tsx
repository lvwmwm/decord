// Module ID: 12414
// Function ID: 12415
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7946, 12415, 12416, 12417, 1363, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 12414 (getAppCrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7946 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12415);
    },
    darker() {
      return callback(12416);
    },
    light() {
      return callback(12417);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12415);
    },
    darker() {
      return callback(12416);
    },
    light() {
      return callback(12417);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12415);
    },
    darker() {
      return callback(12416);
    },
    light() {
      return callback(12417);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
