// Module ID: 9082
// Function ID: 9083
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7623, 9083, 9084, 9085, 4153, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9082 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9083);
    },
    darker() {
      return callback(9084);
    },
    light() {
      return callback(9085);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9083);
    },
    darker() {
      return callback(9084);
    },
    light() {
      return callback(9085);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9083);
    },
    darker() {
      return callback(9084);
    },
    light() {
      return callback(9085);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
