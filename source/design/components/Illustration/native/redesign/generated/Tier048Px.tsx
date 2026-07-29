// Module ID: 12538
// Function ID: 12539
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 6538, 12539, 12540, 12541, 4035, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12538 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12539);
    },
    darker() {
      return callback(12540);
    },
    light() {
      return callback(12541);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12539);
    },
    darker() {
      return callback(12540);
    },
    light() {
      return callback(12541);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12539);
    },
    darker() {
      return callback(12540);
    },
    light() {
      return callback(12541);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
