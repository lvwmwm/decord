// Module ID: 9132
// Function ID: 9133
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7668, 9133, 9134, 9135, 1363, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9132 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9133);
    },
    darker() {
      return callback(9134);
    },
    light() {
      return callback(9135);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9133);
    },
    darker() {
      return callback(9134);
    },
    light() {
      return callback(9135);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9133);
    },
    darker() {
      return callback(9134);
    },
    light() {
      return callback(9135);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
