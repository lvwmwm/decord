// Module ID: 16872
// Function ID: 16873
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7907, 16873, 16874, 16875, 1363, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16872 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16873);
    },
    darker() {
      return callback(16874);
    },
    light() {
      return callback(16875);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16873);
    },
    darker() {
      return callback(16874);
    },
    light() {
      return callback(16875);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16873);
    },
    darker() {
      return callback(16874);
    },
    light() {
      return callback(16875);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
