// Module ID: 16491
// Function ID: 16492
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 6538, 16492, 16493, 16494, 4035, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16491 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
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
export const useBansEmptySource = function useBansEmptySource() {
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
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
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
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
