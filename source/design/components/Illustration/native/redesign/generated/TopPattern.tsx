// Module ID: 12695
// Function ID: 12696
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7544, 12696, 12697, 12698, 4131, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12695 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12696);
    },
    darker() {
      return callback(12697);
    },
    light() {
      return callback(12698);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12696);
    },
    darker() {
      return callback(12697);
    },
    light() {
      return callback(12698);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12696);
    },
    darker() {
      return callback(12697);
    },
    light() {
      return callback(12698);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
