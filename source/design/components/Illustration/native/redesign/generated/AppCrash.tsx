// Module ID: 8976
// Function ID: 8977
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7516, 8977, 8978, 8979, 4101, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 8976 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8977);
    },
    darker() {
      return callback(8978);
    },
    light() {
      return callback(8979);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8977);
    },
    darker() {
      return callback(8978);
    },
    light() {
      return callback(8979);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8977);
    },
    darker() {
      return callback(8978);
    },
    light() {
      return callback(8979);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
