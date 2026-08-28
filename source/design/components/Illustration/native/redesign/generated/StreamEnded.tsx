// Module ID: 9506
// Function ID: 9507
// Name: getStreamEndedSource
// Dependencies: [19, 17, 21, 8851, 9507, 9508, 1363, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9506 (getStreamEndedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8851 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9507);
    },
    darker() {
      return callback(9508);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9507);
    },
    darker() {
      return callback(9508);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9507);
    },
    darker() {
      return callback(9508);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
