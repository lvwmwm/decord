// Module ID: 12789
// Function ID: 12790
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7623, 12790, 12791, 12792, 4153, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12789 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12790);
    },
    darker() {
      return callback(12791);
    },
    light() {
      return callback(12792);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12790);
    },
    darker() {
      return callback(12791);
    },
    light() {
      return callback(12792);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12790);
    },
    darker() {
      return callback(12791);
    },
    light() {
      return callback(12792);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
