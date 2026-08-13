// Module ID: 14123
// Function ID: 14124
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7668, 14124, 14125, 14126, 1363, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14123 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14124);
    },
    darker() {
      return callback(14125);
    },
    light() {
      return callback(14126);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14124);
    },
    darker() {
      return callback(14125);
    },
    light() {
      return callback(14126);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14124);
    },
    darker() {
      return callback(14125);
    },
    light() {
      return callback(14126);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
