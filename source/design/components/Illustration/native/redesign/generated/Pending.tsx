// Module ID: 15812
// Function ID: 15813
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7516, 15813, 15814, 15815, 4101, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15812 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15813);
    },
    darker() {
      return callback(15814);
    },
    light() {
      return callback(15815);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15813);
    },
    darker() {
      return callback(15814);
    },
    light() {
      return callback(15815);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15813);
    },
    darker() {
      return callback(15814);
    },
    light() {
      return callback(15815);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
