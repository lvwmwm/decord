// Module ID: 16658
// Function ID: 16659
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7563, 16659, 16660, 16661, 4147, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16658 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16659);
    },
    darker() {
      return callback(16660);
    },
    light() {
      return callback(16661);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16659);
    },
    darker() {
      return callback(16660);
    },
    light() {
      return callback(16661);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16659);
    },
    darker() {
      return callback(16660);
    },
    light() {
      return callback(16661);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
