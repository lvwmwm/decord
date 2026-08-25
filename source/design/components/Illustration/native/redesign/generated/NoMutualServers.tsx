// Module ID: 12162
// Function ID: 12163
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 7767, 12163, 12164, 12165, 1363, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12162 (getNoMutualServersSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12163);
    },
    darker() {
      return callback(12164);
    },
    light() {
      return callback(12165);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12163);
    },
    darker() {
      return callback(12164);
    },
    light() {
      return callback(12165);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12163);
    },
    darker() {
      return callback(12164);
    },
    light() {
      return callback(12165);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
