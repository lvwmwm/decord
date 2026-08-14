// Module ID: 12862
// Function ID: 12863
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 7689, 12863, 12864, 12865, 1363, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12862 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12863);
    },
    darker() {
      return callback(12864);
    },
    light() {
      return callback(12865);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12863);
    },
    darker() {
      return callback(12864);
    },
    light() {
      return callback(12865);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12863);
    },
    darker() {
      return callback(12864);
    },
    light() {
      return callback(12865);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
