// Module ID: 12362
// Function ID: 12363
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7907, 12363, 12364, 12365, 1363, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 12362 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12363);
    },
    darker() {
      return callback(12364);
    },
    light() {
      return callback(12365);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12363);
    },
    darker() {
      return callback(12364);
    },
    light() {
      return callback(12365);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12363);
    },
    darker() {
      return callback(12364);
    },
    light() {
      return callback(12365);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
