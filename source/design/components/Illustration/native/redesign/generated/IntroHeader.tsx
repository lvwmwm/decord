// Module ID: 16491
// Function ID: 16492
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 6535, 16492, 16493, 16494, 4035, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16491 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16492);
    },
    darker() {
      return callback(16493);
    },
    light() {
      return callback(16494);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16492);
    },
    darker() {
      return callback(16493);
    },
    light() {
      return callback(16494);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16492);
    },
    darker() {
      return callback(16493);
    },
    light() {
      return callback(16494);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
