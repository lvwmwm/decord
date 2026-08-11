// Module ID: 16768
// Function ID: 16769
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7625, 16769, 16770, 16771, 1363, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16768 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16769);
    },
    darker() {
      return callback(16770);
    },
    light() {
      return callback(16771);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16769);
    },
    darker() {
      return callback(16770);
    },
    light() {
      return callback(16771);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16769);
    },
    darker() {
      return callback(16770);
    },
    light() {
      return callback(16771);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
