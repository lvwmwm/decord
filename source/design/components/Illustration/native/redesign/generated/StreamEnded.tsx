// Module ID: 10692
// Function ID: 10693
// Name: getStreamEndedSource
// Dependencies: [19, 17, 21, 7625, 10693, 10694, 1363, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 10692 (getStreamEndedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10693);
    },
    darker() {
      return callback(10694);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10693);
    },
    darker() {
      return callback(10694);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10693);
    },
    darker() {
      return callback(10694);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
