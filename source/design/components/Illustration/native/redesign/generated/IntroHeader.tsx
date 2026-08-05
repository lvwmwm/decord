// Module ID: 16598
// Function ID: 16599
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7516, 16599, 16600, 16601, 4101, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16598 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16599);
    },
    darker() {
      return callback(16600);
    },
    light() {
      return callback(16601);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16599);
    },
    darker() {
      return callback(16600);
    },
    light() {
      return callback(16601);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16599);
    },
    darker() {
      return callback(16600);
    },
    light() {
      return callback(16601);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
