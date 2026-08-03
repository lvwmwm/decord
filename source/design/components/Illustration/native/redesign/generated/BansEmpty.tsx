// Module ID: 16580
// Function ID: 16581
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7532, 16581, 16582, 16583, 4101, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16580 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16581);
    },
    darker() {
      return callback(16582);
    },
    light() {
      return callback(16583);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16581);
    },
    darker() {
      return callback(16582);
    },
    light() {
      return callback(16583);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16581);
    },
    darker() {
      return callback(16582);
    },
    light() {
      return callback(16583);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
