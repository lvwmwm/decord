// Module ID: 10775
// Function ID: 10776
// Name: getStreamFailedSource
// Dependencies: [19, 17, 21, 7767, 10776, 10777, 1363, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 10775 (getStreamFailedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(10776);
    },
    darker() {
      return callback(10777);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamFailedSource = function useStreamFailedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10776);
    },
    darker() {
      return callback(10777);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamFailed = function StreamFailed(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10776);
    },
    darker() {
      return callback(10777);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
