// Module ID: 9005
// Function ID: 9006
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7544, 9006, 9007, 9008, 4130, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9005 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9006);
    },
    darker() {
      return callback(9007);
    },
    light() {
      return callback(9008);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9006);
    },
    darker() {
      return callback(9007);
    },
    light() {
      return callback(9008);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9006);
    },
    darker() {
      return callback(9007);
    },
    light() {
      return callback(9008);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
