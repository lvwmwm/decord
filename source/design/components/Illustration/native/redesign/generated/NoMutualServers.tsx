// Module ID: 12042
// Function ID: 12043
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 7689, 12043, 12044, 12045, 1363, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12042 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12043);
    },
    darker() {
      return callback(12044);
    },
    light() {
      return callback(12045);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12043);
    },
    darker() {
      return callback(12044);
    },
    light() {
      return callback(12045);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12043);
    },
    darker() {
      return callback(12044);
    },
    light() {
      return callback(12045);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
