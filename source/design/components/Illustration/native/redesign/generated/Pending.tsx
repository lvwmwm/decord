// Module ID: 16809
// Function ID: 16810
// Name: getPendingSource
// Dependencies: [19, 17, 21, 8164, 16810, 16811, 16812, 1362, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16809 (getPendingSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16810);
    },
    darker() {
      return callback(16811);
    },
    light() {
      return callback(16812);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16810);
    },
    darker() {
      return callback(16811);
    },
    light() {
      return callback(16812);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16810);
    },
    darker() {
      return callback(16811);
    },
    light() {
      return callback(16812);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
