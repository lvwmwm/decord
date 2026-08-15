// Module ID: 14159
// Function ID: 14160
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7907, 14160, 14161, 14162, 1363, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14159 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14160);
    },
    darker() {
      return callback(14161);
    },
    light() {
      return callback(14162);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14160);
    },
    darker() {
      return callback(14161);
    },
    light() {
      return callback(14162);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14160);
    },
    darker() {
      return callback(14161);
    },
    light() {
      return callback(14162);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
