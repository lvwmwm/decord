// Module ID: 16844
// Function ID: 16845
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7689, 16845, 16846, 16847, 1363, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16844 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16845);
    },
    darker() {
      return callback(16846);
    },
    light() {
      return callback(16847);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16845);
    },
    darker() {
      return callback(16846);
    },
    light() {
      return callback(16847);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16845);
    },
    darker() {
      return callback(16846);
    },
    light() {
      return callback(16847);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
