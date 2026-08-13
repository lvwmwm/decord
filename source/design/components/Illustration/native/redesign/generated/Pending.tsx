// Module ID: 16035
// Function ID: 16036
// Name: getPendingSource
// Dependencies: [19, 17, 21, 7668, 16036, 16037, 16038, 1363, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16035 (getPendingSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16036);
    },
    darker() {
      return callback(16037);
    },
    light() {
      return callback(16038);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16036);
    },
    darker() {
      return callback(16037);
    },
    light() {
      return callback(16038);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16036);
    },
    darker() {
      return callback(16037);
    },
    light() {
      return callback(16038);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
