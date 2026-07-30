// Module ID: 12543
// Function ID: 12544
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 6535, 12544, 12545, 12546, 4035, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12543 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12544);
    },
    darker() {
      return callback(12545);
    },
    light() {
      return callback(12546);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12544);
    },
    darker() {
      return callback(12545);
    },
    light() {
      return callback(12546);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12544);
    },
    darker() {
      return callback(12545);
    },
    light() {
      return callback(12546);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
