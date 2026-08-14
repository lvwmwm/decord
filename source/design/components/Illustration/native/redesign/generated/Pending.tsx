// Module ID: 16053
// Function ID: 16054
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7689, 16054, 16055, 16056, 1363, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16053 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16054);
    },
    darker() {
      return callback(16055);
    },
    light() {
      return callback(16056);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16054);
    },
    darker() {
      return callback(16055);
    },
    light() {
      return callback(16056);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16054);
    },
    darker() {
      return callback(16055);
    },
    light() {
      return callback(16056);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
