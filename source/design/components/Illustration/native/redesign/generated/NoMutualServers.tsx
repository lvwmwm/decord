// Module ID: 11881
// Function ID: 11882
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 7544, 11882, 11883, 11884, 4130, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 11881 (getNoMutualServersSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11882);
    },
    darker() {
      return callback(11883);
    },
    light() {
      return callback(11884);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11882);
    },
    darker() {
      return callback(11883);
    },
    light() {
      return callback(11884);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11882);
    },
    darker() {
      return callback(11883);
    },
    light() {
      return callback(11884);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
