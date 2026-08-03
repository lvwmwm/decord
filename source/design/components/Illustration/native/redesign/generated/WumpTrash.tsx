// Module ID: 14976
// Function ID: 14977
// Name: getWumpTrashSource
// Dependencies: [19, 17, 21, 7532, 14977, 14978, 4101, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 14976 (getWumpTrashSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14977);
    },
    darker() {
      return callback(14978);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14977);
    },
    darker() {
      return callback(14978);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14977);
    },
    darker() {
      return callback(14978);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
