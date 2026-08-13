// Module ID: 16825
// Function ID: 16826
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7668, 16826, 16827, 16828, 1363, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16825 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16826);
    },
    darker() {
      return callback(16827);
    },
    light() {
      return callback(16828);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16826);
    },
    darker() {
      return callback(16827);
    },
    light() {
      return callback(16828);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16826);
    },
    darker() {
      return callback(16827);
    },
    light() {
      return callback(16828);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
