// Module ID: 16650
// Function ID: 16651
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 7544, 16651, 16652, 16653, 4130, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 16650 (getChannelSetupSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16651);
    },
    darker() {
      return callback(16652);
    },
    light() {
      return callback(16653);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16651);
    },
    darker() {
      return callback(16652);
    },
    light() {
      return callback(16653);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16651);
    },
    darker() {
      return callback(16652);
    },
    light() {
      return callback(16653);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
