// Module ID: 9088
// Function ID: 9089
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7625, 9089, 9090, 9091, 1363, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9088 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9089);
    },
    darker() {
      return callback(9090);
    },
    light() {
      return callback(9091);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9089);
    },
    darker() {
      return callback(9090);
    },
    light() {
      return callback(9091);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9089);
    },
    darker() {
      return callback(9090);
    },
    light() {
      return callback(9091);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
