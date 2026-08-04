// Module ID: 10599
// Function ID: 10600
// Name: getStreamFailedSource
// Dependencies: [19, 17, 21, 7544, 10600, 10601, 4131, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 10599 (getStreamFailedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10600);
    },
    darker() {
      return callback(10601);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamFailedSource = function useStreamFailedSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10600);
    },
    darker() {
      return callback(10601);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamFailed = function StreamFailed(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10600);
    },
    darker() {
      return callback(10601);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
