// Module ID: 12662
// Function ID: 12663
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 7532, 12663, 12664, 12665, 4101, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 12662 (getTopPatternSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12663);
    },
    darker() {
      return callback(12664);
    },
    light() {
      return callback(12665);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12663);
    },
    darker() {
      return callback(12664);
    },
    light() {
      return callback(12665);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12663);
    },
    darker() {
      return callback(12664);
    },
    light() {
      return callback(12665);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
