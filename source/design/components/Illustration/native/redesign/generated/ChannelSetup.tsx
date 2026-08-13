// Module ID: 16828
// Function ID: 16829
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7668, 16829, 16830, 16831, 1363, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16828 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16829);
    },
    darker() {
      return callback(16830);
    },
    light() {
      return callback(16831);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16829);
    },
    darker() {
      return callback(16830);
    },
    light() {
      return callback(16831);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16829);
    },
    darker() {
      return callback(16830);
    },
    light() {
      return callback(16831);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
