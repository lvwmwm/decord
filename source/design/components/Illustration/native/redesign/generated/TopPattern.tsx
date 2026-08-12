// Module ID: 12854
// Function ID: 12855
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7664, 12855, 12856, 12857, 1363, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12854 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12855);
    },
    darker() {
      return callback(12856);
    },
    light() {
      return callback(12857);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12855);
    },
    darker() {
      return callback(12856);
    },
    light() {
      return callback(12857);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12855);
    },
    darker() {
      return callback(12856);
    },
    light() {
      return callback(12857);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
