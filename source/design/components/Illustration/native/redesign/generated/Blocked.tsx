// Module ID: 14049
// Function ID: 14050
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7623, 14050, 14051, 14052, 4153, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14049 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14050);
    },
    darker() {
      return callback(14051);
    },
    light() {
      return callback(14052);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14050);
    },
    darker() {
      return callback(14051);
    },
    light() {
      return callback(14052);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14050);
    },
    darker() {
      return callback(14051);
    },
    light() {
      return callback(14052);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
