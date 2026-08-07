// Module ID: 13977
// Function ID: 13978
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7563, 13978, 13979, 13980, 4147, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 13977 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(13978);
    },
    darker() {
      return callback(13979);
    },
    light() {
      return callback(13980);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13978);
    },
    darker() {
      return callback(13979);
    },
    light() {
      return callback(13980);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13978);
    },
    darker() {
      return callback(13979);
    },
    light() {
      return callback(13980);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
