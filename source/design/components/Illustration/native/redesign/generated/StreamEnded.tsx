// Module ID: 10544
// Function ID: 10545
// Name: getStreamEndedSource
// Dependencies: [19, 17, 21, 6535, 10545, 10546, 4035, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 10544 (getStreamEndedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10545);
    },
    darker() {
      return callback(10546);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10545);
    },
    darker() {
      return callback(10546);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10545);
    },
    darker() {
      return callback(10546);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
