// Module ID: 17015
// Function ID: 17016
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7767, 17016, 17017, 17018, 1363, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17015 (getChannelSetupSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17016);
    },
    darker() {
      return callback(17017);
    },
    light() {
      return callback(17018);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17016);
    },
    darker() {
      return callback(17017);
    },
    light() {
      return callback(17018);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17016);
    },
    darker() {
      return callback(17017);
    },
    light() {
      return callback(17018);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
