// Module ID: 15876
// Function ID: 15877
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7563, 15877, 15878, 15879, 4147, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15876 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15877);
    },
    darker() {
      return callback(15878);
    },
    light() {
      return callback(15879);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15877);
    },
    darker() {
      return callback(15878);
    },
    light() {
      return callback(15879);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15877);
    },
    darker() {
      return callback(15878);
    },
    light() {
      return callback(15879);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
