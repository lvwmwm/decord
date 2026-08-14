// Module ID: 15195
// Function ID: 15196
// Name: getWumpTrashSource
// Dependencies: [19, 17, 21, 7689, 15196, 15197, 1363, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 15195 (getWumpTrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15196);
    },
    darker() {
      return callback(15197);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15196);
    },
    darker() {
      return callback(15197);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15196);
    },
    darker() {
      return callback(15197);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
