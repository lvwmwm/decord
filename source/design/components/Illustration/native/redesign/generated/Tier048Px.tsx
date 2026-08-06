// Module ID: 12693
// Function ID: 12694
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 7544, 12694, 12695, 12696, 4130, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12693 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12694);
    },
    darker() {
      return callback(12695);
    },
    light() {
      return callback(12696);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12694);
    },
    darker() {
      return callback(12695);
    },
    light() {
      return callback(12696);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12694);
    },
    darker() {
      return callback(12695);
    },
    light() {
      return callback(12696);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
