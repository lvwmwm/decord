// Module ID: 10568
// Function ID: 10569
// Name: getStreamEndedSource
// Dependencies: [19, 17, 21, 7516, 10569, 10570, 4101, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 10568 (getStreamEndedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10569);
    },
    darker() {
      return callback(10570);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10569);
    },
    darker() {
      return callback(10570);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10569);
    },
    darker() {
      return callback(10570);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
