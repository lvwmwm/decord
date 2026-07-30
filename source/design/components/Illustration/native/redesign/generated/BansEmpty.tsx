// Module ID: 16485
// Function ID: 16486
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 6535, 16486, 16487, 16488, 4035, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16485 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16486);
    },
    darker() {
      return callback(16487);
    },
    light() {
      return callback(16488);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16486);
    },
    darker() {
      return callback(16487);
    },
    light() {
      return callback(16488);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16486);
    },
    darker() {
      return callback(16487);
    },
    light() {
      return callback(16488);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
