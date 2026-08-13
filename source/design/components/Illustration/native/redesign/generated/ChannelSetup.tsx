// Module ID: 16837
// Function ID: 16838
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7668, 16838, 16839, 16840, 1363, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16837 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16838);
    },
    darker() {
      return callback(16839);
    },
    light() {
      return callback(16840);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16838);
    },
    darker() {
      return callback(16839);
    },
    light() {
      return callback(16840);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16838);
    },
    darker() {
      return callback(16839);
    },
    light() {
      return callback(16840);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
