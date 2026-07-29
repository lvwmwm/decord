// Module ID: 11699
// Function ID: 11700
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 6538, 11700, 11701, 11702, 4035, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 11699 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11700);
    },
    darker() {
      return callback(11701);
    },
    light() {
      return callback(11702);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11700);
    },
    darker() {
      return callback(11701);
    },
    light() {
      return callback(11702);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11700);
    },
    darker() {
      return callback(11701);
    },
    light() {
      return callback(11702);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
