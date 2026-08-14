// Module ID: 12873
// Function ID: 12874
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7689, 12874, 12875, 12876, 1363, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12873 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12874);
    },
    darker() {
      return callback(12875);
    },
    light() {
      return callback(12876);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12874);
    },
    darker() {
      return callback(12875);
    },
    light() {
      return callback(12876);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12874);
    },
    darker() {
      return callback(12875);
    },
    light() {
      return callback(12876);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
