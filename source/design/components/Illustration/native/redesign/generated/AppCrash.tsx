// Module ID: 9146
// Function ID: 9147
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7689, 9147, 9148, 9149, 1363, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9146 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9147);
    },
    darker() {
      return callback(9148);
    },
    light() {
      return callback(9149);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9147);
    },
    darker() {
      return callback(9148);
    },
    light() {
      return callback(9149);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9147);
    },
    darker() {
      return callback(9148);
    },
    light() {
      return callback(9149);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
