// Module ID: 14114
// Function ID: 14115
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 7664, 14115, 14116, 14117, 1363, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14114 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14115);
    },
    darker() {
      return callback(14116);
    },
    light() {
      return callback(14117);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14115);
    },
    darker() {
      return callback(14116);
    },
    light() {
      return callback(14117);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14115);
    },
    darker() {
      return callback(14116);
    },
    light() {
      return callback(14117);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
