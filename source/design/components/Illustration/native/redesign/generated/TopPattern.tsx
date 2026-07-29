// Module ID: 12549
// Function ID: 12550
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 6538, 12550, 12551, 12552, 4035, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12549 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12550);
    },
    darker() {
      return callback(12551);
    },
    light() {
      return callback(12552);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12550);
    },
    darker() {
      return callback(12551);
    },
    light() {
      return callback(12552);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12550);
    },
    darker() {
      return callback(12551);
    },
    light() {
      return callback(12552);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
