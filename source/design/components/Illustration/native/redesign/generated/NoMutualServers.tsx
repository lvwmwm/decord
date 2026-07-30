// Module ID: 11695
// Function ID: 11696
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 6535, 11696, 11697, 11698, 4035, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 11695 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11696);
    },
    darker() {
      return callback(11697);
    },
    light() {
      return callback(11698);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11696);
    },
    darker() {
      return callback(11697);
    },
    light() {
      return callback(11698);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11696);
    },
    darker() {
      return callback(11697);
    },
    light() {
      return callback(11698);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
