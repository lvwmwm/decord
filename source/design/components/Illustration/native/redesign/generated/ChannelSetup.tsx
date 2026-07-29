// Module ID: 16509
// Function ID: 16510
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 6538, 16510, 16511, 16512, 4035, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16509 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16510);
    },
    darker() {
      return callback(16511);
    },
    light() {
      return callback(16512);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16510);
    },
    darker() {
      return callback(16511);
    },
    light() {
      return callback(16512);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16510);
    },
    darker() {
      return callback(16511);
    },
    light() {
      return callback(16512);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
