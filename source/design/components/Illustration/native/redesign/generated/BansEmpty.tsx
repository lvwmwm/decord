// Module ID: 16819
// Function ID: 16820
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7668, 16820, 16821, 16822, 1363, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16819 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16820);
    },
    darker() {
      return callback(16821);
    },
    light() {
      return callback(16822);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16820);
    },
    darker() {
      return callback(16821);
    },
    light() {
      return callback(16822);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16820);
    },
    darker() {
      return callback(16821);
    },
    light() {
      return callback(16822);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
