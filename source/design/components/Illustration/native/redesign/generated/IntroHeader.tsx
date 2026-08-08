// Module ID: 16735
// Function ID: 16736
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7623, 16736, 16737, 16738, 4153, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16735 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16736);
    },
    darker() {
      return callback(16737);
    },
    light() {
      return callback(16738);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16736);
    },
    darker() {
      return callback(16737);
    },
    light() {
      return callback(16738);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16736);
    },
    darker() {
      return callback(16737);
    },
    light() {
      return callback(16738);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
