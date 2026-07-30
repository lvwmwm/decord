// Module ID: 14886
// Function ID: 14887
// Name: getWumpTrashSource
// Dependencies: [19, 17, 21, 6535, 14887, 14888, 4035, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 14886 (getWumpTrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14887);
    },
    darker() {
      return callback(14888);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14887);
    },
    darker() {
      return callback(14888);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14887);
    },
    darker() {
      return callback(14888);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
