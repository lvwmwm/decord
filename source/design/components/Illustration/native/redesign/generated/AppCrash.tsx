// Module ID: 9128
// Function ID: 9129
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 7664, 9129, 9130, 9131, 1363, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9128 (getAppCrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9129);
    },
    darker() {
      return callback(9130);
    },
    light() {
      return callback(9131);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9129);
    },
    darker() {
      return callback(9130);
    },
    light() {
      return callback(9131);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9129);
    },
    darker() {
      return callback(9130);
    },
    light() {
      return callback(9131);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
