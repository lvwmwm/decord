// Module ID: 16233
// Function ID: 16234
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7767, 16234, 16235, 16236, 1363, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16233 (getPendingSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16234);
    },
    darker() {
      return callback(16235);
    },
    light() {
      return callback(16236);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16234);
    },
    darker() {
      return callback(16235);
    },
    light() {
      return callback(16236);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16234);
    },
    darker() {
      return callback(16235);
    },
    light() {
      return callback(16236);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
