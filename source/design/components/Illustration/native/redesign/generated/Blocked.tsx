// Module ID: 14047
// Function ID: 14048
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7623, 14048, 14049, 14050, 4153, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14047 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14048);
    },
    darker() {
      return callback(14049);
    },
    light() {
      return callback(14050);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14048);
    },
    darker() {
      return callback(14049);
    },
    light() {
      return callback(14050);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14048);
    },
    darker() {
      return callback(14049);
    },
    light() {
      return callback(14050);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
