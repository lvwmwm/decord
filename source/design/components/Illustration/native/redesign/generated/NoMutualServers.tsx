// Module ID: 12023
// Function ID: 12024
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 7664, 12024, 12025, 12026, 1363, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12023 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12024);
    },
    darker() {
      return callback(12025);
    },
    light() {
      return callback(12026);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12024);
    },
    darker() {
      return callback(12025);
    },
    light() {
      return callback(12026);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12024);
    },
    darker() {
      return callback(12025);
    },
    light() {
      return callback(12026);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
