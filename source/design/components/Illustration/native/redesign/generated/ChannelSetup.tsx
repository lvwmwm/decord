// Module ID: 16670
// Function ID: 16671
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7563, 16671, 16672, 16673, 4147, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16670 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16671);
    },
    darker() {
      return callback(16672);
    },
    light() {
      return callback(16673);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16671);
    },
    darker() {
      return callback(16672);
    },
    light() {
      return callback(16673);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16671);
    },
    darker() {
      return callback(16672);
    },
    light() {
      return callback(16673);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
