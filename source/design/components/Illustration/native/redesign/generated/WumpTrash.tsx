// Module ID: 15816
// Function ID: 15817
// Name: getWumpTrashSource
// Dependencies: [19, 17, 21, 8930, 15817, 15818, 1362, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 15816 (getWumpTrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8930 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(15817);
    },
    darker() {
      return callback(15818);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15817);
    },
    darker() {
      return callback(15818);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15817);
    },
    darker() {
      return callback(15818);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
