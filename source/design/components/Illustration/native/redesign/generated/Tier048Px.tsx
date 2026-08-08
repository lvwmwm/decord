// Module ID: 12778
// Function ID: 12779
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 7623, 12779, 12780, 12781, 4153, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12778 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12779);
    },
    darker() {
      return callback(12780);
    },
    light() {
      return callback(12781);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12779);
    },
    darker() {
      return callback(12780);
    },
    light() {
      return callback(12781);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12779);
    },
    darker() {
      return callback(12780);
    },
    light() {
      return callback(12781);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
