// Module ID: 17571
// Function ID: 17572
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 8164, 17572, 17573, 17574, 1362, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17571 (getBansEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17572);
    },
    darker() {
      return callback(17573);
    },
    light() {
      return callback(17574);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17572);
    },
    darker() {
      return callback(17573);
    },
    light() {
      return callback(17574);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17572);
    },
    darker() {
      return callback(17573);
    },
    light() {
      return callback(17574);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
