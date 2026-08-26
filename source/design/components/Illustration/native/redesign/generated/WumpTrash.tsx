// Module ID: 15417
// Function ID: 15418
// Name: getWumpTrashSource
// Dependencies: [19, 17, 21, 7834, 15418, 15419, 1363, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 15417 (getWumpTrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7834 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(15418);
    },
    darker() {
      return callback(15419);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15418);
    },
    darker() {
      return callback(15419);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15418);
    },
    darker() {
      return callback(15419);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
