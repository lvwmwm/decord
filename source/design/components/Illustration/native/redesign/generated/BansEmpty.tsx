// Module ID: 16826
// Function ID: 16827
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7689, 16827, 16828, 16829, 1363, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16826 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16827);
    },
    darker() {
      return callback(16828);
    },
    light() {
      return callback(16829);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16827);
    },
    darker() {
      return callback(16828);
    },
    light() {
      return callback(16829);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16827);
    },
    darker() {
      return callback(16828);
    },
    light() {
      return callback(16829);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
