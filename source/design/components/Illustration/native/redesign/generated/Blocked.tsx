// Module ID: 13926
// Function ID: 13927
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7516, 13927, 13928, 13929, 4101, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 13926 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(13927);
    },
    darker() {
      return callback(13928);
    },
    light() {
      return callback(13929);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13927);
    },
    darker() {
      return callback(13928);
    },
    light() {
      return callback(13929);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13927);
    },
    darker() {
      return callback(13928);
    },
    light() {
      return callback(13929);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
