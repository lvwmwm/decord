// Module ID: 16629
// Function ID: 16630
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7544, 16630, 16631, 16632, 4131, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16629 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16630);
    },
    darker() {
      return callback(16631);
    },
    light() {
      return callback(16632);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16630);
    },
    darker() {
      return callback(16631);
    },
    light() {
      return callback(16632);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4131) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16630);
    },
    darker() {
      return callback(16631);
    },
    light() {
      return callback(16632);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
