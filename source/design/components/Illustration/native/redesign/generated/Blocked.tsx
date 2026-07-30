// Module ID: 13828
// Function ID: 13829
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 6535, 13829, 13830, 13831, 4035, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 13828 (getBlockedSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(13829);
    },
    darker() {
      return callback(13830);
    },
    light() {
      return callback(13831);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13829);
    },
    darker() {
      return callback(13830);
    },
    light() {
      return callback(13831);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(13829);
    },
    darker() {
      return callback(13830);
    },
    light() {
      return callback(13831);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
