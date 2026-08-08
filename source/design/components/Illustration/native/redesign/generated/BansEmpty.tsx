// Module ID: 16729
// Function ID: 16730
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7623, 16730, 16731, 16732, 4153, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16729 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16730);
    },
    darker() {
      return callback(16731);
    },
    light() {
      return callback(16732);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16730);
    },
    darker() {
      return callback(16731);
    },
    light() {
      return callback(16732);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16730);
    },
    darker() {
      return callback(16731);
    },
    light() {
      return callback(16732);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
