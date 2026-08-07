// Module ID: 11896
// Function ID: 11897
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 7563, 11897, 11898, 11899, 4147, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 11896 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11897);
    },
    darker() {
      return callback(11898);
    },
    light() {
      return callback(11899);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11897);
    },
    darker() {
      return callback(11898);
    },
    light() {
      return callback(11899);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11897);
    },
    darker() {
      return callback(11898);
    },
    light() {
      return callback(11899);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
