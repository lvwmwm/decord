// Module ID: 12708
// Function ID: 12709
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 7563, 12709, 12710, 12711, 4147, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12708 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12709);
    },
    darker() {
      return callback(12710);
    },
    light() {
      return callback(12711);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12709);
    },
    darker() {
      return callback(12710);
    },
    light() {
      return callback(12711);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12709);
    },
    darker() {
      return callback(12710);
    },
    light() {
      return callback(12711);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
