// Module ID: 13435
// Function ID: 13436
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 8164, 13436, 13437, 13438, 1362, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13435 (getTier048PxSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13436);
    },
    darker() {
      return callback(13437);
    },
    light() {
      return callback(13438);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13436);
    },
    darker() {
      return callback(13437);
    },
    light() {
      return callback(13438);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13436);
    },
    darker() {
      return callback(13437);
    },
    light() {
      return callback(13438);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
