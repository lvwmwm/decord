// Module ID: 16756
// Function ID: 16757
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7623, 16757, 16758, 16759, 4153, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16756 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16757);
    },
    darker() {
      return callback(16758);
    },
    light() {
      return callback(16759);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16757);
    },
    darker() {
      return callback(16758);
    },
    light() {
      return callback(16759);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16757);
    },
    darker() {
      return callback(16758);
    },
    light() {
      return callback(16759);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
