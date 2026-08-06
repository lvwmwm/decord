// Module ID: 16638
// Function ID: 16639
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7544, 16639, 16640, 16641, 4130, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16638 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16639);
    },
    darker() {
      return callback(16640);
    },
    light() {
      return callback(16641);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16639);
    },
    darker() {
      return callback(16640);
    },
    light() {
      return callback(16641);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16639);
    },
    darker() {
      return callback(16640);
    },
    light() {
      return callback(16641);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
