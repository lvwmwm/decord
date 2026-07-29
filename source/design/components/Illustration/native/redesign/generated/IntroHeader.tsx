// Module ID: 16497
// Function ID: 16498
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 6538, 16498, 16499, 16500, 4035, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16497 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16498);
    },
    darker() {
      return callback(16499);
    },
    light() {
      return callback(16500);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16498);
    },
    darker() {
      return callback(16499);
    },
    light() {
      return callback(16500);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16498);
    },
    darker() {
      return callback(16499);
    },
    light() {
      return callback(16500);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
