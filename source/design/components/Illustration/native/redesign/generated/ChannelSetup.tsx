// Module ID: 16747
// Function ID: 16748
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7623, 16748, 16749, 16750, 4153, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16747 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16748);
    },
    darker() {
      return callback(16749);
    },
    light() {
      return callback(16750);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16748);
    },
    darker() {
      return callback(16749);
    },
    light() {
      return callback(16750);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16748);
    },
    darker() {
      return callback(16749);
    },
    light() {
      return callback(16750);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
