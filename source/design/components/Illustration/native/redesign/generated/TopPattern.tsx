// Module ID: 12667
// Function ID: 12668
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7516, 12668, 12669, 12670, 4101, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12667 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12668);
    },
    darker() {
      return callback(12669);
    },
    light() {
      return callback(12670);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12668);
    },
    darker() {
      return callback(12669);
    },
    light() {
      return callback(12670);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12668);
    },
    darker() {
      return callback(12669);
    },
    light() {
      return callback(12670);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
