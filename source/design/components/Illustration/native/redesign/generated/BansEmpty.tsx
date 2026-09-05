// Module ID: 17651
// Function ID: 17652
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 8233, 17652, 17653, 17654, 4411, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17651 (getBansEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17652);
    },
    darker() {
      return callback(17653);
    },
    light() {
      return callback(17654);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17652);
    },
    darker() {
      return callback(17653);
    },
    light() {
      return callback(17654);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17652);
    },
    darker() {
      return callback(17653);
    },
    light() {
      return callback(17654);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
