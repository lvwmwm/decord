// Module ID: 11966
// Function ID: 11967
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 7625, 11967, 11968, 11969, 1363, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 11966 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11967);
    },
    darker() {
      return callback(11968);
    },
    light() {
      return callback(11969);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11967);
    },
    darker() {
      return callback(11968);
    },
    light() {
      return callback(11969);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11967);
    },
    darker() {
      return callback(11968);
    },
    light() {
      return callback(11969);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
