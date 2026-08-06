// Module ID: 16632
// Function ID: 16633
// Name: getBansEmptySource
// Dependencies: [19, 17, 21, 7544, 16633, 16634, 16635, 4130, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 16632 (getBansEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16633);
    },
    darker() {
      return callback(16634);
    },
    light() {
      return callback(16635);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16633);
    },
    darker() {
      return callback(16634);
    },
    light() {
      return callback(16635);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16633);
    },
    darker() {
      return callback(16634);
    },
    light() {
      return callback(16635);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
