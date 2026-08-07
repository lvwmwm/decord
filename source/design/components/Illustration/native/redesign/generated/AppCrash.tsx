// Module ID: 9022
// Function ID: 9023
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7563, 9023, 9024, 9025, 4147, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9022 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9023);
    },
    darker() {
      return callback(9024);
    },
    light() {
      return callback(9025);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9023);
    },
    darker() {
      return callback(9024);
    },
    light() {
      return callback(9025);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9023);
    },
    darker() {
      return callback(9024);
    },
    light() {
      return callback(9025);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
