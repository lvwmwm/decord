// Module ID: 16652
// Function ID: 16653
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7563, 16653, 16654, 16655, 4147, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16652 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16653);
    },
    darker() {
      return callback(16654);
    },
    light() {
      return callback(16655);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16653);
    },
    darker() {
      return callback(16654);
    },
    light() {
      return callback(16655);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16653);
    },
    darker() {
      return callback(16654);
    },
    light() {
      return callback(16655);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
