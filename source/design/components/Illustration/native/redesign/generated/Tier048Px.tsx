// Module ID: 12843
// Function ID: 12844
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 7668, 12844, 12845, 12846, 1363, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12843 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12844);
    },
    darker() {
      return callback(12845);
    },
    light() {
      return callback(12846);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12844);
    },
    darker() {
      return callback(12845);
    },
    light() {
      return callback(12846);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12844);
    },
    darker() {
      return callback(12845);
    },
    light() {
      return callback(12846);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
