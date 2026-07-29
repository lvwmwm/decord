// Module ID: 12230
// Function ID: 12231
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 6538, 12231, 12232, 12233, 4035, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 12230 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12231);
    },
    darker() {
      return callback(12232);
    },
    light() {
      return callback(12233);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12231);
    },
    darker() {
      return callback(12232);
    },
    light() {
      return callback(12233);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12231);
    },
    darker() {
      return callback(12232);
    },
    light() {
      return callback(12233);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
