// Module ID: 12795
// Function ID: 12796
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7625, 12796, 12797, 12798, 1363, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12795 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12796);
    },
    darker() {
      return callback(12797);
    },
    light() {
      return callback(12798);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12796);
    },
    darker() {
      return callback(12797);
    },
    light() {
      return callback(12798);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12796);
    },
    darker() {
      return callback(12797);
    },
    light() {
      return callback(12798);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
