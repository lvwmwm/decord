// Module ID: 15708
// Function ID: 15709
// Name: getPendingSource
// Dependencies: [19, 17, 21, 6535, 15709, 15710, 15711, 4035, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15708 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15709);
    },
    darker() {
      return callback(15710);
    },
    light() {
      return callback(15711);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15709);
    },
    darker() {
      return callback(15710);
    },
    light() {
      return callback(15711);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15709);
    },
    darker() {
      return callback(15710);
    },
    light() {
      return callback(15711);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
