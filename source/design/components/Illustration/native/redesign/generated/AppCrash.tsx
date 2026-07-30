// Module ID: 12224
// Function ID: 12225
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 6535, 12225, 12226, 12227, 4035, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 12224 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12225);
    },
    darker() {
      return callback(12226);
    },
    light() {
      return callback(12227);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12225);
    },
    darker() {
      return callback(12226);
    },
    light() {
      return callback(12227);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12225);
    },
    darker() {
      return callback(12226);
    },
    light() {
      return callback(12227);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
