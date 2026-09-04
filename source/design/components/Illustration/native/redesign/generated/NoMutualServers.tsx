// Module ID: 12536
// Function ID: 12537
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 8164, 12537, 12538, 12539, 1362, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12536 (getNoMutualServersSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12537);
    },
    darker() {
      return callback(12538);
    },
    light() {
      return callback(12539);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12537);
    },
    darker() {
      return callback(12538);
    },
    light() {
      return callback(12539);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12537);
    },
    darker() {
      return callback(12538);
    },
    light() {
      return callback(12539);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
