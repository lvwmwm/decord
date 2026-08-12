// Module ID: 16808
// Function ID: 16809
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7664, 16809, 16810, 16811, 1363, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16808 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16809);
    },
    darker() {
      return callback(16810);
    },
    light() {
      return callback(16811);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16809);
    },
    darker() {
      return callback(16810);
    },
    light() {
      return callback(16811);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16809);
    },
    darker() {
      return callback(16810);
    },
    light() {
      return callback(16811);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
