// Module ID: 15960
// Function ID: 15961
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7623, 15961, 15962, 15963, 4153, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15960 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15961);
    },
    darker() {
      return callback(15962);
    },
    light() {
      return callback(15963);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15961);
    },
    darker() {
      return callback(15962);
    },
    light() {
      return callback(15963);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15961);
    },
    darker() {
      return callback(15962);
    },
    light() {
      return callback(15963);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
