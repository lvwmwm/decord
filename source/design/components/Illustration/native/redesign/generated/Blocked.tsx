// Module ID: 14408
// Function ID: 14409
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 8911, 14409, 14410, 14411, 1363, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14408 (getBlockedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8911 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(14409);
    },
    darker() {
      return callback(14410);
    },
    light() {
      return callback(14411);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14409);
    },
    darker() {
      return callback(14410);
    },
    light() {
      return callback(14411);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14409);
    },
    darker() {
      return callback(14410);
    },
    light() {
      return callback(14411);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
