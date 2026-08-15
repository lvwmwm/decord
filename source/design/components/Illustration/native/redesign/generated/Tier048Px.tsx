// Module ID: 12939
// Function ID: 12940
// Name: getTier048PxSource
// Dependencies: [19, 17, 21, 7907, 12940, 12941, 12942, 1363, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 12939 (getTier048PxSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12940);
    },
    darker() {
      return callback(12941);
    },
    light() {
      return callback(12942);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12940);
    },
    darker() {
      return callback(12941);
    },
    light() {
      return callback(12942);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12940);
    },
    darker() {
      return callback(12941);
    },
    light() {
      return callback(12942);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
