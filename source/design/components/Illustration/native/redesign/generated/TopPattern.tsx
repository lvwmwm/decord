// Module ID: 12950
// Function ID: 12951
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7907, 12951, 12952, 12953, 1363, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12950 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12951);
    },
    darker() {
      return callback(12952);
    },
    light() {
      return callback(12953);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12951);
    },
    darker() {
      return callback(12952);
    },
    light() {
      return callback(12953);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12951);
    },
    darker() {
      return callback(12952);
    },
    light() {
      return callback(12953);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
