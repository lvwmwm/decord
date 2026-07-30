// Module ID: 10547
// Function ID: 10548
// Name: getStreamFailedSource
// Dependencies: [19, 17, 21, 6535, 10548, 10549, 4035, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 10547 (getStreamFailedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10548);
    },
    darker() {
      return callback(10549);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamFailedSource = function useStreamFailedSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10548);
    },
    darker() {
      return callback(10549);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamFailed = function StreamFailed(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10548);
    },
    darker() {
      return callback(10549);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
