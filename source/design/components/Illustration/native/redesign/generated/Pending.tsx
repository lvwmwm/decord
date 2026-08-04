// Module ID: 15831
// Function ID: 15832
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7544, 15832, 15833, 15834, 4131, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15831 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15832);
    },
    darker() {
      return callback(15833);
    },
    light() {
      return callback(15834);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15832);
    },
    darker() {
      return callback(15833);
    },
    light() {
      return callback(15834);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15832);
    },
    darker() {
      return callback(15833);
    },
    light() {
      return callback(15834);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
