// Module ID: 16750
// Function ID: 16751
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7625, 16751, 16752, 16753, 1363, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16750 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16751);
    },
    darker() {
      return callback(16752);
    },
    light() {
      return callback(16753);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16751);
    },
    darker() {
      return callback(16752);
    },
    light() {
      return callback(16753);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16751);
    },
    darker() {
      return callback(16752);
    },
    light() {
      return callback(16753);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
