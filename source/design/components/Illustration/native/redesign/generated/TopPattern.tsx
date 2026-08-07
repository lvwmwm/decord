// Module ID: 12719
// Function ID: 12720
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7563, 12720, 12721, 12722, 4147, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12719 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12720);
    },
    darker() {
      return callback(12721);
    },
    light() {
      return callback(12722);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12720);
    },
    darker() {
      return callback(12721);
    },
    light() {
      return callback(12722);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12720);
    },
    darker() {
      return callback(12721);
    },
    light() {
      return callback(12722);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
