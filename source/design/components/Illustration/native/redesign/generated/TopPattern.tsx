// Module ID: 12855
// Function ID: 12856
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7668, 12856, 12857, 12858, 1363, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12855 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12856);
    },
    darker() {
      return callback(12857);
    },
    light() {
      return callback(12858);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12856);
    },
    darker() {
      return callback(12857);
    },
    light() {
      return callback(12858);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12856);
    },
    darker() {
      return callback(12857);
    },
    light() {
      return callback(12858);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
