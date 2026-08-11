// Module ID: 15977
// Function ID: 15978
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7625, 15978, 15979, 15980, 1363, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 15977 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15978);
    },
    darker() {
      return callback(15979);
    },
    light() {
      return callback(15980);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15978);
    },
    darker() {
      return callback(15979);
    },
    light() {
      return callback(15980);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15978);
    },
    darker() {
      return callback(15979);
    },
    light() {
      return callback(15980);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
