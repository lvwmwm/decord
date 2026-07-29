// Module ID: 15714
// Function ID: 15715
// Name: getPendingSource
// Dependencies: [19, 17, 21, 6538, 15715, 15716, 15717, 4035, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15714 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15715);
    },
    darker() {
      return callback(15716);
    },
    light() {
      return callback(15717);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15715);
    },
    darker() {
      return callback(15716);
    },
    light() {
      return callback(15717);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15715);
    },
    darker() {
      return callback(15716);
    },
    light() {
      return callback(15717);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
