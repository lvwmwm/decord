// Module ID: 16832
// Function ID: 16833
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7689, 16833, 16834, 16835, 1363, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16832 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16833);
    },
    darker() {
      return callback(16834);
    },
    light() {
      return callback(16835);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16833);
    },
    darker() {
      return callback(16834);
    },
    light() {
      return callback(16835);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16833);
    },
    darker() {
      return callback(16834);
    },
    light() {
      return callback(16835);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
