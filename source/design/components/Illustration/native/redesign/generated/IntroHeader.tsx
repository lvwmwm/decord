// Module ID: 16756
// Function ID: 16757
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7625, 16757, 16758, 16759, 1363, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16756 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16757);
    },
    darker() {
      return callback(16758);
    },
    light() {
      return callback(16759);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16757);
    },
    darker() {
      return callback(16758);
    },
    light() {
      return callback(16759);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16757);
    },
    darker() {
      return callback(16758);
    },
    light() {
      return callback(16759);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
