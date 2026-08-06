// Module ID: 13963
// Function ID: 13964
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7544, 13964, 13965, 13966, 4130, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 13963 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(13964);
    },
    darker() {
      return callback(13965);
    },
    light() {
      return callback(13966);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13964);
    },
    darker() {
      return callback(13965);
    },
    light() {
      return callback(13966);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13964);
    },
    darker() {
      return callback(13965);
    },
    light() {
      return callback(13966);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
