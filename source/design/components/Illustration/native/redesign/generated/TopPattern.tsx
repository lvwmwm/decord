// Module ID: 12791
// Function ID: 12792
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7623, 12792, 12793, 12794, 4153, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12791 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12792);
    },
    darker() {
      return callback(12793);
    },
    light() {
      return callback(12794);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12792);
    },
    darker() {
      return callback(12793);
    },
    light() {
      return callback(12794);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12792);
    },
    darker() {
      return callback(12793);
    },
    light() {
      return callback(12794);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
