// Module ID: 15010
// Function ID: 15011
// Name: getWumpTrashSource
// Dependencies: [19, 17, 21, 7544, 15011, 15012, 4131, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 15010 (getWumpTrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15011);
    },
    darker() {
      return callback(15012);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15011);
    },
    darker() {
      return callback(15012);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15011);
    },
    darker() {
      return callback(15012);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
