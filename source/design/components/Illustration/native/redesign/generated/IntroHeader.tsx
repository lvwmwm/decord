// Module ID: 16744
// Function ID: 16745
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7623, 16745, 16746, 16747, 4153, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16744 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16745);
    },
    darker() {
      return callback(16746);
    },
    light() {
      return callback(16747);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16745);
    },
    darker() {
      return callback(16746);
    },
    light() {
      return callback(16747);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16745);
    },
    darker() {
      return callback(16746);
    },
    light() {
      return callback(16747);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
