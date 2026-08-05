// Module ID: 16610
// Function ID: 16611
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7516, 16611, 16612, 16613, 4101, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16610 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16611);
    },
    darker() {
      return callback(16612);
    },
    light() {
      return callback(16613);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16611);
    },
    darker() {
      return callback(16612);
    },
    light() {
      return callback(16613);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16611);
    },
    darker() {
      return callback(16612);
    },
    light() {
      return callback(16613);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
