// Module ID: 16617
// Function ID: 16618
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7544, 16618, 16619, 16620, 4131, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16617 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16618);
    },
    darker() {
      return callback(16619);
    },
    light() {
      return callback(16620);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16618);
    },
    darker() {
      return callback(16619);
    },
    light() {
      return callback(16620);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16618);
    },
    darker() {
      return callback(16619);
    },
    light() {
      return callback(16620);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
