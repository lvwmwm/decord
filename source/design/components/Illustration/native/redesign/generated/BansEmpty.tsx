// Module ID: 16592
// Function ID: 16593
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7516, 16593, 16594, 16595, 4101, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16592 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16593);
    },
    darker() {
      return callback(16594);
    },
    light() {
      return callback(16595);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16593);
    },
    darker() {
      return callback(16594);
    },
    light() {
      return callback(16595);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16593);
    },
    darker() {
      return callback(16594);
    },
    light() {
      return callback(16595);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
